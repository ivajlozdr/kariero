import json
import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from time import sleep

# Check if a URL argument is passed
if len(sys.argv) < 2:
    print("Error: URL is required.")
    sys.exit(1)

# Get the URL from the command-line argument
URL = sys.argv[1]

# Path to your local chromedriver executable
chromedriver_path = "./scraping/chromedriver.exe"  # Update with your actual path

# Set up Selenium WebDriver
options = Options()

# Add a User-Agent to mimic a real browser
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0"
options.add_argument(f"user-agent={user_agent}")

# Optional: Run in headless mode
options.headless = False  # Set to True if you don't want the browser to open

# Set up the WebDriver
driver = webdriver.Chrome(service=Service(chromedriver_path), options=options)

# Step 1: Open the page and set initial cookies
driver.get(URL)

# Add initial cookies (cookies from the first step)
initial_cookies = [
    {"name": "JOBSSESSID", "value": "fo4e23s7v2srg8bic4o1bg97uf", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS017554c9", "value": "01855380b0b9adeb2f16d5128474c7816ff36a9d236b8d0c5cd424e0cd5b38c8c1aebe96a8fac0758a97f02d1e533fe6b15ad1198c", "domain": ".jobs.bg", "path": "/"},
    {"name": "FAV", "value": "5484740df2df99935b919f91e87bfdbde612107815f43b502175595ffb48aa29", "domain": ".jobs.bg", "path": "/"},
    {"name": "RELOC", "value": "1", "domain": ".jobs.bg", "path": "/"},
    {"name": "__cf_bm", "value": "E2UtCDhOZQ5yemlBDza6bHWHIYBdD.vzYcvpJxwJDu8-1733928732-1.0.1.1-Sm6bDGwRekR8hxclbYGDvf16UI92V.EAZpS_95TimGmrCUWT.pdP.FMpPSnhul8Q944z_2wlzyTUZ.oD0sa9pg", "domain": ".jobs.bg", "path": "/"},
    {"name": "TS01caf967", "value": "01855380b0225f293a4f0855d8c31ef03e20874e3e08ced794dcb2ba7aa21fadb80936314b9fa901d7ef182ba436a7b0152a259ce1", "domain": ".jobs.bg", "path": "/"},
    {"name": "datadome", "value": "8Sjj3GQClzFc8iXyp2YxEBo7PEzhqoqtePsbpY5G2wwKDsUhWb2hpmntvtn22yV10gtkrFYnG10Vd2AyhGH2i8BDBcnbqhuK15~DoubriSTKt865pyCG5d712_0u5i2n", "domain": ".jobs.bg", "path": "/"}
]

# Loop through the cookies and add them to the WebDriver
for cookie in initial_cookies:
    driver.add_cookie(cookie)

# Step 2: Refresh the page after adding the cookies (necessary to apply them)
driver.refresh()

# Step 3: Get the second set of cookies (after the interaction or login)
second_cookies = driver.get_cookies()

# Step 4: Save the second set of cookies to a file
output_file = "./scraping/cookies.json"
try:
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(second_cookies, file, ensure_ascii=False, indent=4)
    print(f"Second set of cookies saved to {output_file}")
except Exception as e:
    print(f"Error saving cookies to file: {e}", file=sys.stderr)

# Step 5: Close the browser
driver.quit()

# command to test: 
# python generate_cookies.py https://www.jobs.bg/front_job_search.php?s_c%5B%5D=525