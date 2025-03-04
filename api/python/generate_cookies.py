import json
import sys
from playwright.sync_api import sync_playwright

# Check if a URL argument is passed
if len(sys.argv) < 2:
    print("Error: URL is required.")
    sys.exit(1)

# Get the URL from the command-line argument
URL = sys.argv[1]

# Start Playwright context
with sync_playwright() as p:
    # Launch browser (use 'firefox' or 'webkit' if you want to use other browsers)
    browser = p.chromium.launch(headless=False)  # Set headless=True for no UI
    page = browser.new_page()

    # Step 1: Navigate to the URL
    page.goto(URL)

    # Step 2: Set initial cookies
    initial_cookies = [
        {"name": "datadome", "value": "wKpErMEfRHKIw921sPbeXxcCFv6tqr9zXgzFwzUx2vQofZawXAYawWUweGIRzOAXoX6YTur2ekU3vmJDzk_gRt2D8kj6Mak8U9C3I49QNQNUZ2qOJ8SMSjUOvvnEQRy3", "domain": ".jobs.bg", "path": "/"}
    ]
    
    for cookie in initial_cookies:
        page.context.add_cookies([cookie])

    # Step 3: Refresh the page after adding the cookies
    page.reload()

    # Step 4: Get the new set of cookies
    new_cookies = page.context.cookies()

    filtered_cookies = [
        {
            "name": cookie["name"],
            "value": cookie["value"],
            "domain": cookie["domain"],
            "path": cookie["path"]
        }
        for cookie in new_cookies if cookie["name"] in ["JOBSSESSID", "datadome"]
    ]

    # Step 5: Save the new set of cookies to a file
    output_file = "cookies.json"
    
    try:
        with open(output_file, "w", encoding="utf-8") as file:
            json.dump(filtered_cookies, file, ensure_ascii=False, indent=4)
        print(f"New set of cookies saved to {output_file}")
    except Exception as e:
        print(f"Error saving cookies to file: {e}", file=sys.stderr)

    # Step 6: Close the browser
    browser.close()

# command to test: 
# python generate_cookies.py https://www.jobs.bg/front_job_search.php?s_c%5B%5D=525