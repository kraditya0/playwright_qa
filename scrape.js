const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const seedUrls = [
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=79',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=80',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=81',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=82',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=83',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=84',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=85',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=86',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=87',
    'https://exam.tools.ds.study.iitm.ac.in/ga4?seed=88',
  ];

  let grandTotal = 0;

  for (const url of seedUrls) {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Extract all numbers from all table cells
      const numbers = await page.$$eval('table td, table th', cells =>
        cells
          .map(c => parseFloat(c.innerText.replace(/,/g, '').trim()))
          .filter(n => !isNaN(n))
      );

      const seedTotal = numbers.reduce((a, b) => a + b, 0);
      console.log(`URL: ${url} => Sum: ${seedTotal}`);
      grandTotal += seedTotal;
    } catch (err) {
      console.error(`Failed to process ${url}: ${err.message}`);
    }
  }

  console.log(`Grand Total across all pages: ${grandTotal}`);
  await browser.close();
})();
