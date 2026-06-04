import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    //Lauch url and assert the title
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("Login with valid credentials", async ({ page }) => {
    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("h2")).toHaveText("Make Appointment");
  });

  test("Login with invalid credentials", async ({ page }) => {
    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("john");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("this");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
