import { test, expect } from '@playwright/test';



test('Mosue Movement', async ({ page }) => {
    await page.goto("http://localhost:100/");
 await page.locator("//input[@name='user_name']").fill('admin');
 await page.locator("//input[@name='user_password']").fill('admin');
 await page.locator("//input[@name='Login']").click();
 await page.waitForTimeout(3000);
 await page.locator("#showSubMenu").hover();
 await page.waitForTimeout(3000);
 await page.locator("//a[text()='New Vendor']").click();
  await page.waitForTimeout(3000);
 await page.locator("//th[text()='Vendor Information:']").isVisible

//DragnDrop
await page.locator("//a[text()='My Account']").click();
 await page.waitForTimeout(5000);
 await page.locator("//input[@value=' Customize Tab ']").click();
 await page.waitForTimeout(5000);
 await page.dragAndDrop("#cl2", "#cl5")
  await page.waitForTimeout(5000);
 let x = await page.locator("#cl5").textContent();
 console.log(x);
});
