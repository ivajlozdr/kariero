import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime

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
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0"
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
    {"name": "__cf_bm", "value": "HCGLM.wP0U4VDgbhMR8asAALklbO3dduJE7atM5I4Z4-1733842084-1.0.1.1-vjrLuQXHaHs78nJMIC1RQmluUFLQcwLwSyEw_uatfXdoZZCU4pLLf8FenkVUfaOnVXTpT03e03dFdFFJUdESng", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS01caf967", "value": "01855380b080e357fc7bb2c42087ca8c6c43e03a43a363247dda764438b887c40addfd308316902ce376ab3336cfcf200a3db29c0a", "domain": ".jobs.bg", "path": "/"},
    {"name": "datadome", "value": "L_ZX6uOijQmL04X~chy2lRZ5_gwkJjbk0buF5ETuHgmg5VRMLr8HQBhPLAw5UpTskcR6f8ug75~vZyAfIrFQjIMDIexQtHQeN1pVaGTLskT~FCHqdIxCI0yCGMou2hlp", "domain": ".jobs.bg", "path": "/"}
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
        city_element = job.select_one("span.location")
        city = city_element.get_text(strip=True) if city_element else "N/A"

        # Extract offer details
        details_element = job.select_one("div.card-info.card__subtitle")
        
        # Remove any <i> elements from the details element
        for i_tag in details_element.select("i"):
            i_tag.decompose()

        offer_details = details_element.get_text(" | ", strip=True)
        offer_url = job.select_one("a.black-link-b")['href']

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
        if off_days.startswith("от"):
            off_days = off_days.replace("от", "").strip()

        # Extract city from details (assuming it's one of the mentioned cities)
        city_match = re.search(r"(София|Търговище|Русе|Пловдив|Бургас|Разград)", offer_details)
        city = city_match.group(0) if city_match else "N/A"

        # Remove parsed details from offer_details
        cleaned_details = offer_details
        for text_to_remove in [city, off_days, salary, "(Бруто)", "(Нето)", "Отпуск", ";", "Заплата"]:
            if text_to_remove in cleaned_details:
                cleaned_details = cleaned_details.replace(text_to_remove, "")

        # Clean up excess characters (like "|")
        cleaned_details = re.sub(r"\|{2,}", "|", cleaned_details).strip(" |")

        # Extract job posting date
        date_element = job.select_one("div.card-date")
        date_text = date_element.contents[0].strip() if date_element else "N/A"

        # Append to results
        job_offers.append({
            "title": job_title,
            "company": company_name,
            "city": city,
            "details": cleaned_details,
            "salary": salary,
            "off_days": off_days,
            "url": offer_url,
            "date": date_text
        })

    except Exception as e:
        print(f"Error parsing job: {e}", file=sys.stderr)

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
