import sys
import json
import re
from datetime import datetime
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup

# Check if a URL argument is passed
if len(sys.argv) < 2:
    print("Error: URL is required.")
    sys.exit(1)

# Get the URL from command-line argument
URL = sys.argv[1]

# Function to handle scraping
def scrape_jobs():
    with sync_playwright() as p:
        # Launch a browser (chromium is similar to Chrome)
        browser = p.chromium.launch(headless=False)  # Set headless=True to run without a visible browser
        page = browser.new_page()

        # Add cookies to the page
        cookies = [
            {"name": "JOBSSESSID", "value": "81dqdlvqubia9s99otpskcqdb9", "domain": ".jobs.bg", "path": "/"},
            {"name": "TS01caf967", "value": "01855380b026ca7d74891ed223b578cf5068d86b247051ae1d41039e6817c07ad8064b76aa00435d3baf07ddf79656d3c22538b7e1", "domain": ".jobs.bg", "path": "/"},
            {"name": "datadome", "value": "Ci6JgkeaM3_leE9CalEzhVhe_M10U73yP6JZvYcqyhGQDhrAJuoHOYi0l8BnOPw2Lq47GY9i24UgN2tonHcsInohbpLQZby9bCQZrg5PGJO0EZ1oHTdtyLrYj_oDf9md", "domain": ".jobs.bg", "path": "/"},
            {"name": "__cf_bm", "value": "CQ9sFn8KxOJ_kriWqmpum3OxoPoeE58zsy4GLak1aqU-1741026235-1.0.1.1-P8vgfvkzRoz6eXsV90y6D76te8PJiJpiHkjwqF3vRPBhpns6fHaYMRb8V7G5zMXbDD5p8pmZsgV_kJIiiMOncy8Am0c9e53Kf1TiPQ3jIY0", "domain": ".jobs.bg", "path": "/"}
        ]

        page.context.add_cookies(cookies)

        # Open the target URL
        page.goto(URL)

        print("Navigating to the URL...")
        page.goto(URL)

        print("Waiting for selector...")
        print("Selector found, fetching page content...")

        # Fetch the page content after rendering
        page_source = page.content()

        # Save the page content to a file
        with open("page_content.html", "w", encoding="utf-8") as file:
            file.write(page_source)

        print("Page content saved to 'page_content.html'.")

        # Close the browser
        browser.close()

if __name__ == "__main__":
    scrape_jobs()
