from bs4 import BeautifulSoup
import requests

hdr = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/111.0.0.0 "
                  "Safari/537.36"}

url = "https://practice.geeksforgeeks.org/courses"
page = requests.get(url, headers=hdr,)
print(page.status_code)
soup = BeautifulSoup(page.content, "html.parser")
soup2 = BeautifulSoup(soup.prettify(), "html.parser")
print(soup2)
