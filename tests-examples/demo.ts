import { firefox, Browser, Page } from "@playwright/test";

(async () => {
  const browser: Browser = await firefox.launch({
    headless: true 
  });

  const page: Page = await browser.newPage();
  await page.goto("https://www.google.com/");

  await page.waitForTimeout(5000);

  await browser.close();
})();
