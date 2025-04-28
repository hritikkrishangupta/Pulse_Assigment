import { PlaywrightCrawler, Dataset, log } from 'crawlee';

const allReviews = []; // Array to hold all the reviews

const g2Reviews = async(url) => {
    const crawler = new PlaywrightCrawler({
        async requestHandler({ page, request, enqueueLinks }) {
    
            // Wait for the review divs to load
            await page.waitForSelector('div.i18n-translation_container.pt-4.py-3.py-md-5.review-card', { timeout: 10000 });
    
            // Extract reviews from the current page
            const reviews = await page.$$eval(
                'div.i18n-translation_container.pt-4.py-3.py-md-5.review-card',
                (reviewDivs) => {
                    return reviewDivs.map(div => {
                        const getText = (selector) => div.querySelector(selector)?.textContent.trim() || '';
    
                        return {
                            name: getText('.h5.fw-bold.mb-2'),
                            title: getText('h3.h5.fw-bold'),
                        };
                    });
                }
            );
    
            // Store the reviews in the allReviews array
            allReviews.push(...reviews);
    
            // Enqueue pagination links (e.g., "Next" button)
            await enqueueLinks({
                selector: 'a.page-link[rel="next"]', // Only if "Next" is not disabled
                label: 'pagination', // Optional: add label to know it's a pagination link
                strategy: 'same-domain', // Safer crawling
            });
        },
    
        maxRequestsPerCrawl: 100,
        maxConcurrency: 3,
    });
    
    // Start crawling
    await crawler.run([url]);
    console.log(allReviews.length, 'reviews found!')
    return 1;

}

// const one = await capterraReviews('');
// await console.log(one, 'one');

// await console.log(allReviews.length, 'reviews found!');
// await console.log(allReviews[1], 'review 1');

export default g2Reviews;