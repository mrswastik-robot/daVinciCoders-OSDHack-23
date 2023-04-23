from bs4 import BeautifulSoup
import requests

with open("Udemy.html", 'r') as html_file:
    html_content = html_file.read()

soup = BeautifulSoup(html_content, "lxml")
course_names = soup.find_all("h3", class_="ud-heading-md course-card--course-title--vVEjC")
index = 0
res = []
for course in course_names:
    title = course.find('a')
    about = course.find('span', {'data-purpose': 'seo-headline'})
    rating = course.find('span', {'data-purpose': 'seo-rating'})
    price = course.find('span', {'data-purpose': 'seo-current-price'})
    image = course.find('a')['href']
    index += 1

    data = {"title": title.text, "id": index, "about": about.text, "rating": rating.text, "price": price.text, "image": image}
    res.append(data)

print(res)
# spans1 = soup.find_all('span', {'data-purpose': 'seo-headline'})
# spans2 = soup.find_all('span', {'data-purpose': 'seo-rating'})
# spans2 = soup.find_all('span', {'data-purpose': 'seo-current-price'})
# data = {'title': " ", 'about': [span.text for span in spans1], 'ratings': [span.text for span in spans2],
#         'price': [span.text for span in spans2]}, {'title': "new"}
# print(spans1)

# data = {'title': title, 'paragraphs': [p.text for p in paragraphs]}

# html_text = """
# <span class="MarketInfo_market-num_1lAXs"> 11,511.31 USD </span>
# """
#
# html = BeautifulSoup(html_text, "lxml")
#
# spans = html.find_all('span', {'class': 'MarketInfo_market-num_1lAXs'})
# for span in spans:
#     print(span.text.replace('USD', '').strip())
