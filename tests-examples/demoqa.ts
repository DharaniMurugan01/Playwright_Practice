import { firefox, Browser, Page } from "@playwright/test";

(async () => {
  const browser: Browser = await firefox.launch({
    headless: false 
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await page.goto("https://www.flipkart.com/");
  await page.goBack();
  await page.goForward();
  await page.reload();
await browser.close();
})();
