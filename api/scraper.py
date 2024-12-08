from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import json
import sys

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
    {"name": "__cf_bm", "value": "_xBochdDo2cjp3VyGzU.VwMTgIrBnLuomqNvRi77ooc-1733647761-1.0.1.1-KPZtGU.pgUdu7FSPtC9xHixrZLIFi.n9iC1mZuGhnfEDKXQaEZem82HB.pL6U6WTeV3Y0ACNjn0Z.dRD8qM5FA", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS01caf967", "value": "01855380b02314502e83d2661215bc7cec304967f6f5ab6b6869f98a2bd3ffe0d551c1d45652da36f3b7cbe782459ce76f13c65119", "domain": ".jobs.bg", "path": "/"},
    {"name": "datadome", "value": "DXoZRcj_xB4LYjVnPQ8tl6pL2Si0hSXHWyxCZdYsdoQ_lq0wyJv7vMt4vQchrG4_tRl~e6Q6hToCQc41EUZHwjM75JmYC9Q7uMS2FOozVdT1oy7cxTGjnvtV~tiuQK1e", "domain": ".jobs.bg", "path": "/"},
]

for cookie in cookies:
    driver.add_cookie(cookie)

# Step 4: Open the target page
URL = "https://www.jobs.bg/front_job_search.php?s_c%5B0%5D=1168"
driver.get(URL)

# Wait for the job listings to load (adjust the condition as needed)
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
        # Extract data
        job_title = job.select_one("div.card-title span:last-child").get_text(strip=True)
        company_name = job.select_one("div.card-logo-info div.secondary-text").get_text(strip=True)
        job_location_salary = job.select_one("div.card-info.card__subtitle").get_text(" | ", strip=True)
        job_url = job.select_one("a.black-link-b")['href']
        additional_params = job.get('additional-params', '{}')  # Extract JSON-like string
        additional_data = json.loads(additional_params.replace('&quot;', '"'))  # Convert to dict safely

        # Append to results
        job_offers.append({
            "title": job_title,
            "company": company_name,
            "details": job_location_salary,
            "url": job_url,
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

# Return the job offers as output (this is the part that will be used in the Node.js app)
print(json.dumps(job_offers))  # Print job offers in JSON format

# Step 9: Quit the browser
driver.quit()
