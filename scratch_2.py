from bs4 import BeautifulSoup
import requests


def scrapUdemy():
    with open("UdemyJAVA.html", 'r') as html_file:
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

        data = {"title": title.text, "id": index, "about": about.text, "rating": rating.text, "price": price.text,
                "image": image}
        res.append(data)

    return res


def scrapGfg():
    with open("gfgdsa.html", 'r') as html_file:
        html_content = html_file.read()
        soup = BeautifulSoup(html_content, "lxml")

        numCourse = 0
        index = 0
        res = []
        cards = soup.find_all('div', class_="ui segment active tab border-none")

        for card in cards:
            course_names = soup.find("h5",
                                     class_="ui left aligned header courseListingPage_myAuto__i6GdI sofia-pro "
                                            "course_heading")
            price = soup.find('p', class_="sofia-pro g-mb-0 courseListingPage_batchFee__0NlbJ")

            ratings = soup.find('span', class_="urw-din")

            about = soup.find('div',
                              class_="courseListingPage_descriptionText__zN_K1 sofia-pro g-opacity-50 g-mb-1 "
                                     "grid_with__meta")
            image = soup.find('img')

            data = {"title": course_names.text, "id": index+1, "about": about.text, "rating": ratings.text,
                    "price": price.text,
                    "image": image}
            res.append(data)

        # for course in course_names:
        #     print(course.text)
        #
        # for pri in price:
        #     print(pri.text)
        #
        # for rating in ratings:
        #     print(rating.text)
        #
        # for abo in about:
        #     print(abo.text)
        #
        # for img in image:
        #     print(img['src'])

    return res
