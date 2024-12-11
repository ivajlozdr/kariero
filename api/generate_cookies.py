import json
import sys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Check if a URL argument is passed
if len(sys.argv) < 2:
    print("Error: URL is required.")
    sys.exit(1)

# Get the URL from command-line argument
URL = sys.argv[1]

# Path to your local chromedriver executable
chromedriver_path = "chromedriver.exe"  # Update with your actual path

# Set up Selenium WebDriver
options = Options()

# Add a User-Agent to mimic a real browser
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0"
options.add_argument(f"user-agent={user_agent}")

# Optional: Run in headless mode
options.headless = False  # Set to True if you don't want the browser to open

# Set up the WebDriver
driver = webdriver.Chrome(service=Service(chromedriver_path), options=options)

# Step 1: Open the page and handle any necessary steps (e.g., login or CAPTCHA bypass)
driver.get(URL)

# Wait for the page to load, or any specific elements to load
# This depends on the website and its dynamic content. Adjust the wait accordingly.

# Example of waiting for a specific element (adjust as needed)
# WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "your-element-selector")))

# Step 2: Get cookies after loading the page (e.g., after login or bypassing CAPTCHA)
cookies = driver.get_cookies()

# Step 3: Save cookies to a file
output_file = "cookies.json"
try:
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(cookies, file, ensure_ascii=False, indent=4)
    print(f"Cookies saved to {output_file}")
except Exception as e:
    print(f"Error saving cookies to file: {e}", file=sys.stderr)

# Step 4: Close the browser
driver.quit()
