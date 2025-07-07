import { test, expect } from '@playwright/test';

test('Open Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
  const tit=await page.title();
  console.log(tit);
  const url=page.url();
  console.log(url);
  const cont=await page.context();
//   console.log(cont.substring(0,300))
  await page.waitForTimeout(5000);
});
 