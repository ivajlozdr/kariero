# coding: iso-8859-1 -*-
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

        # Fetch the page content after rendering
        page_source = page.content()

        # Parse the page content using BeautifulSoup
        soup = BeautifulSoup(page_source, "html.parser")

        job_list = soup.select("ul.page-1 > li")

        salaries = []
        job_offers = []

        for job in job_list:
            try:
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

                # Add separate logic to parse numeric values from `salary` variable

                exchange_rates = {
                    "BGN": 1,  # Base currency
                    "USD": 1.85,  # Example rate: 1 USD = 1.85 BGN
                    "EUR": 1.95  # Example rate: 1 EUR = 1.95 BGN
                }
                
                salary_numbers = re.findall(r"\d+", salary)

                currency = None
                if "BGN" in salary:
                    currency = "BGN"
                elif "USD" in salary:
                    currency = "USD"
                elif "EUR" in salary:
                    currency = "EUR"
                    
                if len(salary_numbers) == 2:  # "от X до Y"
                    salary_min, salary_max = map(int, salary_numbers)

                    # Convert salary to base currency (BGN)
                    salary_min_bgn = salary_min * exchange_rates.get(currency, 1)
                    salary_max_bgn = salary_max * exchange_rates.get(currency, 1)
                    
                    salaries.append((salary_min_bgn + salary_max_bgn) / 2)
                elif len(salary_numbers) == 1:  # Single value
                    salary_value = int(salary_numbers[0])

                    # Convert salary to base currency (BGN)
                    salary_value_bgn = salary_value * exchange_rates.get(currency, 1)

                    salaries.append(salary_value_bgn)

                # Extract off days
                off_days_match = re.search(r"Отпуск\s*(от\s+\d+\s+до\s+\d+\s+дни|\d+\s+дни|\d+\s+до\s+\d+\s+дни)", offer_details)
                off_days = off_days_match.group(1) if off_days_match else "N/A"

                # Extract city from details (assuming it's one of the mentioned cities)
                city_match = re.search(r"(София|Търговище|Русе|Пловдив|Бургас|Разград|Димитровград|Варна|Стара Загора|Варвара \(Пазарджик\)|Плевен|Перник|Ботевград|Пазарджик|Ямбол|Враца|Шумен|Самоков|Казанлък|Велико Търново|Царацово|Добрич|Силистра|Кюстендил|Панаретовци|Габрово|Горна Оряховица|Разлог|Кърджали|Долна Диканя|Благоевград|Равно поле|Столник|Радиново|Гара Елин Пелин|Козлодуй|Оряховица|Елин Пелин|Девня|Огняново \(Пазарджик\)|Дупница|Ловеч|Карлово|Исперих|Сливен|Банско|Хасково|Монтана|Пампорово|Асеновград|Видин|Смолян|Севлиево|Стряма|Троян|Петрич|Сандански|Костинброд|Панагюрище|Радомир|Боровец|Айтос|Чирпан)", offer_details)
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

        # Calculate the average salary
        average_salary = round(sum(salaries) / len(salaries), 2) if salaries else 0

        # Include the average salary at the beginning of the results
        result = {
            "average_salary": average_salary,
            "job_offers": job_offers
        }

        # Save the data to a JSON file
        with open("job_titles.json", "w", encoding="utf-8") as json_file:
            json.dump(result, json_file, ensure_ascii=False, indent=4)

        print("Job titles saved to 'job_titles.json'.")

        # Close the browser
        browser.close()

if __name__ == "__main__":
    scrape_jobs()
