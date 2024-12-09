import re
import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import json

# Check if a URL argument is passed
if len(sys.argv) < 2:
    print("Error: URL is required.")
    sys.exit(1)

# Get the URL from command-line argument
URL = sys.argv[1]

# Path to your local chromedriver executable
chromedriver_path = "chromedriver.exe"  # Update with your actual path

# Step 1: Set up Selenium WebDriver
options = Options()

# Add a User-Agent to mimic a real browser
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
options.add_argument(f"user-agent={user_agent}")

# Optional: Run in headless mode
options.headless = False  # Set to True if you don't want the browser to open

# Set up the WebDriver
driver = webdriver.Chrome(service=Service(chromedriver_path), options=options)

# Step 2: Open a base page to set cookies
driver.get("https://www.jobs.bg")  # Base page must match the domain of the target URL

# Step 3: Add cookies
cookies = [
    {"name": "JOBSSESSID", "value": "fo4e23s7v2srg8bic4o1bg97uf", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS017554c9", "value": "01855380b0b9adeb2f16d5128474c7816ff36a9d236b8d0c5cd424e0cd5b38c8c1aebe96a8fac0758a97f02d1e533fe6b15ad1198c", "domain": ".jobs.bg", "path": "/"},
    {"name": "FAV", "value": "5484740df2df99935b919f91e87bfdbde612107815f43b502175595ffb48aa29", "domain": ".jobs.bg", "path": "/"},
    {"name": "RELOC", "value": "1", "domain": ".jobs.bg", "path": "/"},
    {"name": "__cf_bm", "value": "4x.Jx6K32RVOgIJ4K.qK1iJIPWgFkml0svmXk.KPUpU-1733754813-1.0.1.1-IHT2bQdz04Ty5ZKWCSUBFDR8_DcxyKi2emvpAd3WNJboPODOEcTC0Q9tIsvIeY5Pw6Xw9uvom3nHMQqb6eSthg", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS01caf967", "value": "01855380b065adb5b3ed516d024a5de452adb256a6083741c777fff1922e781c2da34d26bbe143415c616805ac0f06100691b0c2d1", "domain": ".jobs.bg", "path": "/"},
    {"name": "datadome", "value": "t7O1tzGP4CsM7FlZ_m92L7F978fCSFevzFku1C9tuj~AQA8NfsUexHyRSiGWwyQrkLtFtDTfyQS0RvuqfUC9sZamDFWqgw6h5_Cr3p39h7H_CwENnkeG3YeS3wUCjUkk", "domain": ".jobs.bg", "path": "/"}
]

for cookie in cookies:
    driver.add_cookie(cookie)

# Step 4: Open the target page using the passed URL
driver.get(URL)

# Wait for the job listings to load
try:
    job_list_locator = (By.CSS_SELECTOR, "ul.page-1 > li")  # Adjust selector if necessary
    WebDriverWait(driver, 10).until(EC.presence_of_element_located(job_list_locator))
except Exception as e:
    print(f"Error waiting for page elements: {e}", file=sys.stderr)
    driver.quit()
    sys.exit(1)

# Step 5: Fetch the page source
page_source = driver.page_source

# Step 6: Parse the page content with BeautifulSoup
soup = BeautifulSoup(page_source, 'html.parser')

# Step 7: Find all job listing elements
job_list = soup.select("ul.page-1 > li")  # Ensure this selector matches the structure of the page

job_offers = []

for job in job_list:
    try:
        # Extract job title
        job_title_element = job.select_one(
            "div.card-title > span:not(:has(.material-icons)):not(:empty)"
        )
        job_title = job_title_element.get_text(strip=True) if job_title_element else "N/A"

        # Extract company name
        company_name = job.select_one("div.card-logo-info div.secondary-text").get_text(strip=True)
        
        # Extract location (city)
        city_element = job.select_one("span.location")  # Adjust this selector based on your HTML structure
        city = city_element.get_text(strip=True) if city_element else "N/A"

        # Extract offer details
        offer_details = job.select_one("div.card-info.card__subtitle").get_text(" | ", strip=True)
        offer_url = job.select_one("a.black-link-b")['href']
        
        # Extract additional data (JSON-like string)
        additional_params = job.get('additional-params', '{}')
        additional_data = json.loads(additional_params.replace('&quot;', '"'))

        # Extract salary information
        salary_match = re.search(r"\b(?:от\s+\d+\s+до\s+\d+\s+BGN|от\s+\d+\s+BGN|до\s+\d+\s+BGN|[\d,]+\s+BGN)\b", offer_details)
        salary = salary_match.group(0) if salary_match else "N/A"

        # Check for the presence of "Бруто" and "Нето" in the offer details
        if "Бруто" in offer_details:
            salary = f"{salary} (Бруто)"
        elif "Нето" in offer_details:
            salary = f"{salary} (Нето)"

        # Extract off days
        off_days_match = re.search(r"Отпуск\s*\|\s*(от\s+\d+\s+до\s+\d+\s+дни|\d+\s+дни)", offer_details)
        off_days = off_days_match.group(1) if off_days_match else "N/A"

        # For off days with range, format it properly (e.g., "от 48 до 56 дни")
        if off_days.startswith("от"):
            off_days = off_days.replace("от", "").strip()

        # Extract city from details (assuming it's one of the mentioned cities)
        city_match = re.search(r"(София|Търговище|Русе|Пловдив|Бургас|Разград)", offer_details)
        city = city_match.group(0) if city_match else "N/A"

        # Append to results
        job_offers.append({
            "title": job_title,
            "company": company_name,
            "city": city,
            "details": offer_details,
            "salary": salary,
            "off_days": off_days,
            "url": offer_url,
            "additional_data": additional_data
        })
    except Exception as e:
        print(f"Error parsing job: {e}", file=sys.stderr)  # Log errors to stderr

# Step 8: Save results to a JSON file
output_file = "job_offers.json"
try:
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(job_offers, file, ensure_ascii=False, indent=4)
except Exception as e:
    print(f"Error saving to file: {e}", file=sys.stderr)

# Return the job offers as output
print(json.dumps(job_offers))  # Print job offers in JSON format

# Step 9: Quit the browser
driver.quit()
