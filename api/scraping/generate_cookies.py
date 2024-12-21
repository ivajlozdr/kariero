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
        {"name": "JOBSSESSID", "value": "fo4e23s7v2srg8bic4o1bg97uf", "domain": ".jobs.bg", "path": "/"},
        {"name": "TS017554c9", "value": "01855380b0b9adeb2f16d5128474c7816ff36a9d236b8d0c5cd424e0cd5b38c8c1aebe96a8fac0758a97f02d1e533fe6b15ad1198c", "domain": ".jobs.bg", "path": "/"},
        {"name": "FAV", "value": "5484740df2df99935b919f91e87bfdbde612107815f43b502175595ffb48aa29", "domain": ".jobs.bg", "path": "/"},
        {"name": "RELOC", "value": "1", "domain": ".jobs.bg", "path": "/"},
        {"name": "__cf_bm", "value": "stOu3bFqYaRuR5029e66rvzzUyXu6GCUTgtFbKWgYQ-1734184401-1.0.1.1-gyDBZFtagWnWeCDp5cPohrcs_5WnwNi7_XnwpCydR.5XNo4xXO.Sy.MRWiUqyGEIuekZ6J8HdWW_PGQHg0kW.w", "domain": ".jobs.bg", "path": "/"},
        {"name": "TS01caf967", "value": "01855380b09e6677d3f91093313406cac61cca4b64d36212287fb7196d9955a8be2d5863a904cb6e95b48ed035527ae352ea50a92b", "domain": ".jobs.bg", "path": "/"},
        {"name": "datadome", "value": "8Qwbn06CXfnoqB8vSu5_4nQKtFKslfOMcb25Qa6zq8wzHxA59IiFkWiB1AAEA6eBCVsmJHJlqBLl6~fxBtoI2Q3qhyBCb8OipX1X_EvBg5gjo9AufnQqOV5wPIDnWHOv", "domain": ".jobs.bg", "path": "/"}
    ]
    
    for cookie in initial_cookies:
        page.context.add_cookies([cookie])

    # Step 3: Refresh the page after adding the cookies
    page.reload()

    # Step 4: Get the new set of cookies
    new_cookies = page.context.cookies()

    # Step 5: Save the new set of cookies to a file
    output_file = "cookies.json"
    
    try:
        with open(output_file, "w", encoding="utf-8") as file:
            json.dump(new_cookies, file, ensure_ascii=False, indent=4)
        print(f"New set of cookies saved to {output_file}")
    except Exception as e:
        print(f"Error saving cookies to file: {e}", file=sys.stderr)

    # Step 6: Close the browser
    browser.close()

# command to test: 
# python generate_cookies.py https://www.jobs.bg/front_job_search.php?s_c%5B%5D=525