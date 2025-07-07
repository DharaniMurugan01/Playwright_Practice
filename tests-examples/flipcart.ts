import { Browser, Page, chromium } from "@playwright/test";

(async () => {
  const browser: Browser = await chromium.launch({
    headless: true 
  });

  const page: Page = await browser.newPage();
  await page.goto("https://www.flipkart.com/");

  await page.waitForTimeout(5000);
  const tit=await page.title();
  console.log(tit);
  console.log(tit.length)
  const url=page.url();
if (url === "https://www.flipkart.com/") {
    console.log(" URL is correct");
  } else {
    console.error(` URL mismatch. Found: ${url}`);
  }
  const ps = page.context(); 
  const allPages = ps.pages(); 
console.log('Total pages:', allPages.length);
await browser.close();
})();
