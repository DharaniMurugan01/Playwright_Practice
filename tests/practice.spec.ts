import { test, expect } from '@playwright/test';

// test('check drag and drop', async ({ page }) => {
//   await page.goto('https://demoqa.com/droppable');
//   await expect(page).toHaveTitle(/DEMOQA/);
//   const tit=await page.title();
//   console.log(tit);
//   const url=page.url();
//   console.log(url);
//   const src=await page.locator("//div[@id='draggable']");
//   console.log("working src");
//   const target=await page.locator("(//div[@id='droppable'])[1]");
//   console.log("working target");
//   await src.dragTo(target);
//   await expect(target).toContainText('Dropped!');
//   console.log("drag and drop performed successfully");
// });
 
test('Fill form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  const form=page.locator("//h5");
  await form.scrollIntoViewIfNeeded();
  const photo=page.locator("//div[text()='Gender']");
  await photo.screenshot({ path: 'element.png' });
  await page.screenshot({ path: 'fullpage.png', fullPage: true });
  console.log("form scrolled");
  await page.getByPlaceholder("First Name").fill("Dharani");
  await page.locator("//input[@id='lastName']").fill("M");
  await page.locator("//input[@id='userEmail']").fill("2k21dhara@gmail.com");
  // await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');
  await page.locator("#dateOfBirthInput").fill("01 Jul 2025");
  const subject=await page.locator(".subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3");
  await subject.type("Computer Science");
  // const checkbox=page.locator("//input[@id='hobbies-checkbox-2']");
  // await checkbox.click();
  //const filein=page.locator("//input[@id='uploadPicture']");
  //await filein.setInputFiles("pic.png");
  await page.getByPlaceholder("Current Address").fill("hi this is dharani");
  await page.getByRole('button',{name:'Submit'}).click();
});
 
