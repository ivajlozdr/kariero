from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import json
import sys

# Path to your local chromedriver.exe
chromedriver_path = "chromedriver.exe"  # Update with your actual path

# Step 1: Set up Selenium WebDriver (for Chrome in this case)
options = Options()

# # Add a User-Agent to mimic a real browser
# user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0"
# options.add_argument(f"user-agent={user_agent}")

options.headless = False  # Set to True if you don't want the browser to open (headless mode)

# Set up the WebDriver with the options and the local chromedriver.exe
driver = webdriver.Chrome(service=Service(chromedriver_path), options=options)

# URL to scrape
URL = "https://www.jobs.bg/front_job_search.php?s_c%5B0%5D=1168"  # Replace with the actual URL

# Step 2: Open the page with Selenium and wait for it to load
driver.get(URL)

# Optionally, you can wait for a specific element to load
# For example, waiting for job listing elements to appear
driver.implicitly_wait(10)  # Wait up to 10 seconds for elements to be present

# Step 3: Fetch the page source after JavaScript has loaded
page_source = driver.page_source

# Step 4: Parse the page content with BeautifulSoup
soup = BeautifulSoup(page_source, 'html.parser')

# Step 5: Find all job listing elements
job_list = soup.select("ul.page-1 > li")  # Adjust selector if there are multiple pages

job_offers = []

for job in job_list:
    try:
        # Extract data
        job_title = job.select_one("div.card-title span:last-child").get_text(strip=True)
        company_name = job.select_one("div.card-logo-info div.secondary-text").get_text(strip=True)
        job_location_salary = job.select_one("div.card-info.card__subtitle").get_text(" | ", strip=True)
        job_url = job.select_one("a.black-link-b")['href']
        additional_params = job.get('additional-params', '{}')  # Extract JSON-like string
        additional_data = json.loads(additional_params.replace('&quot;', '"'))  # Convert to dict

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

# Step 6: Output results to stdout in JSON format
print(json.dumps(job_offers, ensure_ascii=False, indent=4))  # JSON output to stdout

# Log success message to stderr instead of stdout
print("Python script executed", file=sys.stderr)

# Optionally, print the raw HTML content if you need to inspect it
print(page_source)  # Uncomment to print raw page source (after JS loaded)

# Step 7: Commented out the driver.quit() to keep the browser open
# driver.quit()  # Don't close the browser, so you can inspect it

