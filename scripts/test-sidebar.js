const { chromium } = require('playwright');

(async ()=>{
  const url = process.argv[2] || 'http://localhost:3000/en/01-orders-list';
  console.log('Testing sidebar labels on', url);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try{
    page.on('console', msg => console.log('PAGE LOG>', msg.type(), msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR>', err && err.message));
    page.on('requestfailed', req => console.log('REQ FAILED>', req.url(), req.failure() && req.failure().errorText));
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    // Wait for sidebar links to render (allow extra time for hydration)
    await page.waitForSelector('.theme-doc-sidebar-menu .menu__link', { timeout: 30000 });
    // Extract category labels
    const labels = await page.$$eval('.theme-doc-sidebar-menu .menu__link.menu__link--sublist', els => els.map(e => e.textContent.trim()));
    const links = await page.$$eval('.theme-doc-sidebar-menu .menu__link', els => els.map(e => e.textContent.trim()));
    console.log('Category labels (sublist):', labels);
    console.log('All sidebar links (first 20):', links.slice(0,20));
  }catch(e){
    console.error('Test failed', e && e.message);
    process.exitCode = 2;
  }finally{
    await browser.close();
  }
})();
