# Pulse Assignment

A web scraping and data processing project built with Node.js, Crawlee, Playwright, ejs, and Express.  
It get four input from the user i.e. Company name, Start date, End date, and Source from fontend.
Its Frontend is created using view engine : 'ejs'.
It scrapes data from websites, processes it, and saves the output into a JSON file inside the `storage/` directory.

## Features

- Web scraping using Crawlee and Playwright (headless browser automation)
- Extracted data saved automatically into a JSON file (`storage/myBiz.json`)
- Data modification and filtering utilities
- Express.js server with API routes and EJS rendering
- Clean modular project structure
- It allow only G2 or Capterra as a source only
- Although due G2 advanced I am not able to get any data therefore for now only Capterra as a source allowed.
- I have implemented server side validation to restrict any other source

## Tech Stack

- Node.js
- Crawlee
- Playwright
- Express.js
- EJS
- Chrono-node

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/pulse_assignment.git
   cd pulse_assignment

2. Install dependencies:

   npm install

   npx playwright install

## Usage

    npm start

    or

    node server.js

    The Express server will run by default at :
    http://Localhost:3000/

    After scraping, your output JSON file will be saved here:
    /storage/company.json

## Project Structure

    pulse_assignment/
    ├── data_modifiers/      # Scripts to modify scraped data
    │   ├── datatojson.js
    │   └── filtereddata.js
    ├── node_modules/        # Installed dependencies
    ├── public/              # Static files (optional)
    ├── routes/              # Express API routes
    │   └── dataRoutes.js
    ├── Scrapers/            # Web scraping scripts
    │   ├── capScraper.js
    │   └── g2Scraper.js
    ├── storage/             # Scraped JSON data storage
    │   ├── key_value_stores/
    │   ├── request_queues/
    │   └── myBiz.json       # Output JSON file
    ├── views/               # EJS templates
    │   └── index.ejs
    ├── package.json
    ├── package-lock.json
    └── server.js            # Entry point of the application

## API Endpoint

POST /api/data - Fetch processed data from webpage that we created using ejs.

## Example Output (JSON)
Example content inside storage/companyname.json

[
  {
    "name": "Mohammad",
    "title": "Keka is the good solution for your business.  It can automate your Human Resources unit easily.",
    "date": "29-04-2023",
    "rating": "4.0"
  },
  {
    "name": "Puneet",
    "title": "Does the bare minimum; inflexible and customer service is poor",
    "date": "29-04-2023",
    "rating": "3.0"
  },
  {
    "name": "Bhushan",
    "title": "Cost effective Hr& Payroll Management tool",
    "date": "29-04-2023",
    "rating": "4.0"
  },
  {
    "name": "Ganesh",
    "title": "Great and easy to use product",
    "date": "29-05-2024",
    "rating": "5.0"
  },
  {
    "name": "Mridul",
    "title": "My Opinion ABout Keka",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Lawrent",
    "title": "A good solution for small and medium businesses.",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Raushan",
    "title": "Its very Easy to Use and Low cost",
    "date": "29-04-2024",
    "rating": "5.0"
  },
  {
    "name": "Vijay",
    "title": "Efficient HR Management and Empowering Experience",
    "date": "29-04-2023",
    "rating": "4.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "Good App for HR And Application Tracking System",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Martin",
    "title": "The all-in-one organization solution",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Abhishek",
    "title": "Positive Experience with Keka",
    "date": "29-09-2024",
    "rating": "5.0"
  },
  {
    "name": "Soubhangi",
    "title": "Keka- decent experience",
    "date": "28-02-2025",
    "rating": "4.0"
  },
  {
    "name": "Pankaj",
    "title": "Best Payroll software",
    "date": "29-01-2025",
    "rating": "5.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "One of the top class HR apps in the market",
    "date": "29-03-2025",
    "rating": "5.0"
  },
  {
    "name": "Anumit",
    "title": "Review on Keka",
    "date": "29-07-2024",
    "rating": "5.0"
  },
  {
    "name": "Hariharan",
    "title": "Keka review",
    "date": "29-11-2024",
    "rating": "4.0"
  },
  {
    "name": "Minal",
    "title": "Easy to use tool",
    "date": "28-02-2025",
    "rating": "4.0"
  },
  {
    "name": "Ashok",
    "title": "Good product, but no support.",
    "date": "29-08-2024",
    "rating": "4.0"
  },
  {
    "name": "Rampawan",
    "title": "BEWARE DON't Use KEKA, We have wasted time and money`",
    "date": "29-04-2024",
    "rating": "1.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "User-friendly and customizable",
    "date": "29-12-2024",
    "rating": "4.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "Excellent payroll tool for all",
    "date": "29-04-2024",
    "rating": "5.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "Best tool for Attendance",
    "date": "29-04-2024",
    "rating": "5.0"
  },
  {
    "name": "Rishabh",
    "title": "Human Resource Management",
    "date": "29-04-2024",
    "rating": "4.0"
  },
  {
    "name": "Shruti",
    "title": "Best tool for attendance and leave tracking",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "Mostly used tool in our organisation for reviews and attendance",
    "date": "29-04-2023",
    "rating": "4.0"
  },
  {
    "name": "Shivam",
    "title": "Review On Keka",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Manokar",
    "title": "Helps businesses to manage peoples",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Viktor",
    "title": "Good HR payroll software",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Manisha",
    "title": "Keka is the Best Way to Establish a Successful Business",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Verified Reviewer",
    "title": "Keka - all your needs under one platform",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Faraz",
    "title": "All day every day",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Tushar",
    "title": "Best hrms tool",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Alekhya",
    "title": "My review of keka",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Navneet",
    "title": "Modern UI and ease of use are the USP of keka",
    "date": "29-04-2023",
    "rating": "5.0"
  },
  {
    "name": "Vikas",
    "title": "Good Software for a Mid size company",
    "date": "29-04-2023",
    "rating": "4.0"
  },
  {
    "name": "Animesh",
    "title": "Best HRMS tool",
    "date": "29-04-2023",
    "rating": "5.0"
  }
]

## Web Page Preview

![alt text](<Screenshot 2025-04-29 022012.png>)
