# Kijiji-Real-Estate-Scraper
This app scrapes the data on Kijiji real estate listings and plots them on a map for you so you can make better decisions when choosing a new place to buy or rent

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to create google cloud console account and enable the geomaps API, to do that go to https://console.cloud.google.com/. You will get a free $400 of credit upon signing up.

Additionally, to plot the data on the map you will need a mapbox api key and you can get that by signing up at mapbox.com.

### Installing

You will need to pip install selenium

```
pip install selenium
```
You will also need to download the webdriver binary and place it in your system PATH, click [here](https://www.selenium.dev/documentation/en/selenium_installation/installing_webdriver_binaries/) for instructions 

## Running the app

After you install all the modules you need, you can set the minimum and maximum price of the real estate you are looking for. The default
parameters in the URL are set for unfurnished room rentals and roommates in the City of Toronto with a minimum of 1 image in the listing, however you can set the parameters to whatever you like by changing the URL.
If you have any questions on how you can do that, feel free to send me an email and I will help you find the right URL.

After you've run the ipynb file, you will have a json text. You will need to copy that text and paste it in https://www.freeformatter.com/json-escape.html. Press unescape then copy and paste the text to the data.js file in the repo, assigning it to a variable called data.

After that you can run a live server and you will have your interactive map! 

![Demo](images/demo.gif)

