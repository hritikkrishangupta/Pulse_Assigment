import { Router } from 'express';
import capterraReviews from '../Scrapers/capScraper.js'; 
const router = Router();

// Route: POST /api/data
router.post('/data', (req, res) => {
  const { companyname, startdate, enddate, source } = req.body;  

  // Server-Side Validation
  // Define today's date for comparison
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const minDate = '2019-01-01'; // Minimum start date (Jan 1st, 2019)

  // Define valid source URLs
  const validSources = ['https://www.capterra.in'];

  // Validation
  if (!companyname || !startdate || !enddate || !source) {
    return res.send(`<script>alert('All fields are required!'); window.history.back();</script>`);
  }

  if (companyname.trim() === '') {
    return res.send(`<script>alert('Company name is required!'); window.history.back();</script>`);
  }

  if (companyname.length < 3) {
    return res.send(`<script>alert('Company name must be at least 3 characters long!'); window.history.back();</script>`);
  }

  if (startdate < minDate) {
    return res.send(`<script>alert('Start date cannot be before January 1st, 2019!'); window.history.back();</script>`);
  }

  if (startdate > today) {
    return res.send(`<script>alert('Start date cannot be in the future!'); window.history.back();</script>`);
  }

  if (enddate > today) {
    return res.send(`<script>alert('End date cannot be in the future!'); window.history.back();</script>`);
  }

  if (enddate < startdate) {
    return res.send(`<script>alert('End date cannot be before start date!'); window.history.back();</script>`);
  }

  // Validate Source URL
  if (!validSources.some(prefix => source.startsWith(prefix))) {
    if(source.startsWith('https://www.g2.com')) 
      return res.send(`<script>alert('G2 source is not working right now!'); window.history.back();</script>`);
    else
      return res.send(`<script>alert('Source must be from either G2 or Capterra!'); window.history.back();</script>`);
  }

  // If validation passes, proceed with saving to the database or other operations
  //res.send('<h1>Form submitted successfully!</h1>');
  console.log("Companyname:", companyname);
  console.log("startdate:", startdate);
  console.log("enddate:", enddate);
  console.log("source:", source);
  
  capterraReviews(source, companyname, startdate, enddate) // Call the scraping function with the source URL and company name
    .then(() => {
      res.send(`<script>alert('Review recieved successfully!'); window.location.href='/';</script>`);
    })
    .catch((error) => {
      console.error('Error scraping Capterra reviews:', error);
    });

  // res.send(`<script>alert('Data recieved successfully!'); window.location.href='/';</script>`);
  
});

export default router;