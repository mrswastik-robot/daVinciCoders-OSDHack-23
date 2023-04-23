# python 3 only
import urllib.request
from urllib.error import URLError

target_file_path = "/Users/pradyotranjan/sophos-brute/main/downloaded.html"  # downloaded page saved here

try:
    response = urllib.request.urlopen('https://www.udemy.com/courses/search/?src=ukw&q=dsa')
    html_content = response.read()

    with open(target_file_path, "wb") as fp:
        fp.write(html_content)

except URLError as e:
    print("Unable to download page: " + str(e.reason))