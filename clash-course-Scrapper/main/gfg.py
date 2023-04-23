from bs4 import BeautifulSoup
import requests

with open("coursera webdev.html", 'r') as html_file:
    html_content = html_file.read()

soup = BeautifulSoup(html_content, "lxml")
course_names = soup.find_all("h5")

index = 0
res = []
for course in course_names:
    title = course.find("h5")
    print()
    #about = course.find('span', {'data-purpose': 'seo-headline'})
    #rating = course.find('span', {'data-purpose': 'seo-rating'})
    #price = course.find('span', {'data-purpose': 'seo-current-price'})
    #image = course.find('a')['href']
    index += 1

    data = {"title": title.text, "id": index}#, "about": about.text, "rating": rating.text, "price": price.text, "image": image}
    res.append(data)
print(res)

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
