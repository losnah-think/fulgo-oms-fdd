const { chromium } = require('playwright');

(async ()=>{
  const url = process.argv[2] || 'http://localhost:3000/en/01-orders-list';
  console.log('Collecting console logs from', url);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const logs = [];
  page.on('console', msg => logs.push({type: msg.type(), text: msg.text()}));
  page.on('pageerror', err => logs.push({type: 'pageerror', text: err.message, stack: err.stack}));
  page.on('requestfailed', req => logs.push({type: 'requestfailed', url: req.url(), reason: req.failure() && req.failure().errorText}));
  try{
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    // Wait to capture runtime errors
    await page.waitForTimeout(10000);
  }catch(e){
    logs.push({type:'goto-error', text: e && e.message});
  }
  console.log('----- COLLECTED LOGS -----');
  logs.forEach(l => console.log(l.type, l.text || '', l.stack ? '\n' + l.stack : ''));
  await browser.close();
  if(logs.some(l=>l.type==='pageerror')) process.exitCode = 2;
})();
