import { test, expect } from "@playwright/test";

test("Verify the title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await page.close();
});
test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByRole('textbox', { name: 'Username' }).first().click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Login failed! Please ensure').click();
});
