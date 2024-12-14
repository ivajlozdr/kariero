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

# Path to your local chromedriver executable
# chromedriver_path = "/home/noit1/kariero-api/scraping/chromedriver"
# chromedriver_path = "chromedriver.exe"

# Function to handle scraping
def scrape_jobs():
    with sync_playwright() as p:
        # Launch a browser (chromium is similar to Chrome)
        browser = p.chromium.launch(headless=False)  # Set headless=True to run without a visible browser
        page = browser.new_page()

        # Add cookies to the page
        cookies = [
            {"name": "JOBSSESSID", "value": "fo4e23s7v2srg8bic4o1bg97uf", "domain": ".jobs.bg", "path": "/"},
            {"name": "TS017554c9", "value": "01855380b0b9adeb2f16d5128474c7816ff36a9d236b8d0c5cd424e0cd5b38c8c1aebe96a8fac0758a97f02d1e533fe6b15ad1198c", "domain": ".jobs.bg", "path": "/"},
            {"name": "FAV", "value": "5484740df2df99935b919f91e87bfdbde612107815f43b502175595ffb48aa29", "domain": ".jobs.bg", "path": "/"},
            {"name": "RELOC", "value": "1", "domain": ".jobs.bg", "path": "/"},
            {"name": "__cf_bm", "value": "stOu3bFqYaRuR5029e66rvzzUyXu6GCUTgtFbKWgYQ-1734184401-1.0.1.1-gyDBZFtagWnWeCDp5cPohrcs_5WnwNi7_XnwpCydR.5XNo4xXO.Sy.MRWiUqyGEIuekZ6J8HdWW_PGQHg0kW.w", "domain": ".jobs.bg", "path": "/"},
            {"name": "TS01caf967", "value": "01855380b09e6677d3f91093313406cac61cca4b64d36212287fb7196d9955a8be2d5863a904cb6e95b48ed035527ae352ea50a92b", "domain": ".jobs.bg", "path": "/"},
            {"name": "datadome", "value": "8Qwbn06CXfnoqB8vSu5_4nQKtFKslfOMcb25Qa6zq8wzHxA59IiFkWiB1AAEA6eBCVsmJHJlqBLl6~fxBtoI2Q3qhyBCb8OipX1X_EvBg5gjo9AufnQqOV5wPIDnWHOv", "domain": ".jobs.bg", "path": "/"}
        ]
        page.context.add_cookies(cookies)

        # Open the target URL
        page.goto(URL)

        # Wait for the job listings to load (adjust selector if necessary)
        page.wait_for_selector("ul.page-1 > li")

        # Fetch the page content after rendering
        page_source = page.content()

        # Parse the page content with BeautifulSoup
        soup = BeautifulSoup(page_source, 'html.parser')

        # Find all job listing elements
        job_list = soup.select("ul.page-1 > li")

        job_offers = []

        for job in job_list:
            try:
                # Extract job title
                job_title_element = job.select_one("div.card-title > span:not(:has(.material-icons)):not(:empty)")
                job_title = job_title_element.get_text(strip=True) if job_title_element else "N/A"

                # Extract company name
                company_name = job.select_one("div.card-logo-info div.secondary-text").get_text(strip=True)

                # Extract location (city)
                city_element = job.select_one("span.location")
                city = city_element.get_text(strip=True) if city_element else "N/A"

                # Extract offer details
                details_element = job.select_one("div.card-info.card__subtitle")

                if details_element:
                    # Remove any elements with 'material' in their classes
                    for tag in details_element.select("[class*='material']"):
                        tag.decompose()

                    offer_details = details_element.get_text(" ", strip=True)

                    # Clean up extra spaces in offer details
                    offer_details = re.sub(r"\s+", " ", offer_details).strip()
                else:
                    offer_details = "N/A"

                # Extract offer URL
                offer_url = job.select_one("a.black-link-b")["href"]

                # Extract salary information
                salary_match = re.search(
                    r"\b(?:от\s+\d+\s+до\s+\d+\s+(BGN|USD|EUR)|от\s+\d+\s+(BGN|USD|EUR)|до\s+\d+\s+(BGN|USD|EUR)|[\d,]+\s+(BGN|USD|EUR))\b",
                    offer_details
                )
                salary = salary_match.group(0) if salary_match else "N/A"

                # Check for the presence of "Бруто" and "Нето" in the offer details
                if "Бруто" in offer_details:
                    salary = f"{salary} (Бруто)"
                elif "Нето" in offer_details:
                    salary = f"{salary} (Нето)"

                # Remove salary information from offer details
                if salary_match:
                    offer_details = offer_details.replace(salary_match.group(0), "").strip()

                # Extract off days
                off_days_match = re.search(r"Отпуск\s*(от\s+\d+\s+до\s+\d+\s+дни|\d+\s+дни|\d+\s+до\s+\d+\s+дни)", offer_details)
                off_days = off_days_match.group(1) if off_days_match else "N/A"

                # Extract city from details (assuming it's one of the mentioned cities)
                city_match = re.search(r"(София|Търговище|Русе|Пловдив|Бургас|Разград|Димитровград|Варна|Стара Загора|Варвара \(Пазарджик\)|Плевен|Перник|Ботевград|Пазарджик|Ямбол|Враца|Шумен|Самоков|Казанлък|Велико Търново|Царацово|Добрич|Силистра|Кюстендил|Панаретовци|Габрово|Горна Оряховица|Разлог|Кърджали|Долна Диканя|Благоевград|Равно поле|Столник|Радиново|Гара Елин Пелин|Козлодуй|Оряховица|Елин Пелин|Девня|Огняново \(Пазарджик\)|Дупница|Ловеч|Карлово|Исперих|Сливен|Банско|Хасково|Монтана|Пампорово|Асеновград|Видин|Смолян|Севлиево|Троян|Петрич|Сандански|Костинброд|Панагюрище|Радомир|Боровец|Айтос|Чирпан)", offer_details)
                city = city_match.group(0) if city_match else "N/A"

                # Remove unrelated text from offer details
                for text_to_remove in [city, off_days, "(Бруто)", "(Нето)", "Отпуск", ";", "Заплата"]:
                    if text_to_remove in offer_details:
                        offer_details = offer_details.replace(text_to_remove, "")

                # Remove excess separators and clean up whitespace
                cleaned_details = re.sub(r"\|{2,}", "|", offer_details).strip(" |")

                # Collapse multiple spaces into a single space
                cleaned_details = re.sub(r"\s+", " ", cleaned_details).strip()

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
        # output_file = "/home/noit1/kariero-api/scraping/job_offers.json"
        output_file = "job_offers.json"

        try:
            with open(output_file, "w", encoding="utf-8") as file:
                json.dump(job_offers, file, ensure_ascii=False, indent=4)
        except Exception as e:
            print(f"Error saving to file: {e}", file=sys.stderr)

        # Return the job offers as output
        print(json.dumps(job_offers))  # Print job offers in JSON format

        # Close the browser
        browser.close()

if __name__ == "__main__":
    scrape_jobs()
