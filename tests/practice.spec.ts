import { test, expect } from '@playwright/test';
test.use({ browserName: 'chromium' });
test('Fill form', async ({ page }) => {
  // Increase timeout
  test.setTimeout(60000);

  // Visit the online form
  await page.goto('https://demoqa.com/automation-practice-form', { timeout: 60000 });

  const form = page.locator("//h5");
  await form.scrollIntoViewIfNeeded();

  const photo = page.locator("//div[text()='Gender']");
  await photo.screenshot({ path: 'element.png' });
  await page.screenshot({ path: 'fullpage.png', fullPage: true });

  console.log("form scrolled");

  await page.getByPlaceholder("First Name").fill("Dharani");
  await page.locator("#lastName").fill("M");
  await page.locator("#userEmail").fill("2k21dhara@gmail.com");

  await page.getByText('Female').click();
  await page.getByPlaceholder("Mobile Number").fill("9876543210");
  await page.locator("#dateOfBirthInput").fill("01 Jul 2025");

  // Subject input
  const subjectInput = page.locator("#subjectsInput");
  await subjectInput.click();
  await subjectInput.type("Computer Science");
  await subjectInput.press("Enter");

  // Checkbox
  await page.getByLabel("Reading").check();

  // File upload (optional - uncomment when file exists)
  // await page.setInputFiles('#uploadPicture', 'tests/assets/pic.png');

  await page.getByPlaceholder("Current Address").fill("hi this is dharani");

  await page.getByRole('button', { name: 'Submit' }).click();
});

 
