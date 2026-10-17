import { test, expect } from '@playwright/test';
//import { getTestData } from '../utilities/jsonreader';
import { LoginPage } from '../Pages/loginPage';
import { HomePage } from '../Pages/Homepage';
import { LeadPage } from '../Pages/LeadPage';
//import { readCSV } from '../utilities/csvreader';
import { getExcelDataByTC, loadExcel } from '../utilities/excelReader';

let loginpage: LoginPage;
let homepage: HomePage;
let leadpage: LeadPage;

test.beforeAll (async()=> {
loadExcel('testdata/data.xlsx', 'data');

});

test('Verify_Title_TC01', async ({ page }) => {
  //const data = await getTestData('Verify_Title_TC01');
  //const data = await readCSV('Verify_Title_TC01');
  const data = await getExcelDataByTC('Verify_Title_TC01')
  await page.goto('/');
  await expect(page).toHaveTitle(data.title);
  await page.close();
});

test('Verify_logo_TC02', async ({ page }) =>{

  await page.goto("/");
  loginpage = new LoginPage(page);
  const islogodisoplayed = await loginpage.isLogoDisplayed();
  await expect(islogodisoplayed).toBe(true); 
  await page.close();
  
});

test('Verify_invalidlogin_TC03', async ({ page }) =>{
//const data = getTestData('Verify_invalidlogin_TC03')
//const data = readCSV('Verify_invalidlogin_TC03')
const data = await getExcelDataByTC('Verify_invalidlogin_TC03')
await page.goto("/");
loginpage = new LoginPage(page);
await loginpage.login(data.username, data.password);
const errormesage = await loginpage.iserrormsgdisplayed();
await expect(errormesage).toBe(true);
await page.close();
}); 

test('Verify_validlogin_TC04', async ({ page }) =>{
//const data = getTestData('Verify_validlogin_TC04')
//const data = readCSV('Verify_validlogin_TC04')
const data = await getExcelDataByTC('Verify_validlogin_TC04')
await page.goto("/");
loginpage = new LoginPage(page);
loginpage.login(data.username, data.password);
await page.waitForTimeout(3000);
homepage = new HomePage(page)
homepage.clicklogout();
await page.waitForTimeout(3000); 
const islogodisoplayed = await loginpage.isLogoDisplayed();
await expect(islogodisoplayed).toBe(true); 
await page.close();
});  

test('Verify_createleadwithmandatoryfield_TC05', async ({ page }) =>{
  //const data = readCSV('Verify_createleadwithmandatoryfield_TC05')
  //const data = getTestData('Verify_createleadwithmandatoryfield_TC05')
  const data = await getExcelDataByTC('Verify_createleadwithmandatoryfield_TC05')
await page.goto("/");
loginpage = new LoginPage(page);
loginpage.login(data.username, data.password);
await page.waitForTimeout(3000)
homepage = new HomePage(page)
homepage.clickNewlead();
await page.waitForTimeout(3000)
leadpage = new LeadPage(page)
leadpage.createlead(data.lastname, data.company);
await page.waitForTimeout(5000)
const lstname = await leadpage.getLastName();
await expect(lstname).toBe("smith");
const compnyname = await leadpage.getCompanyName();
await expect(compnyname).toBe("Google");
await page.waitForTimeout(3000)
homepage.clicklogout
await page.waitForTimeout(3000)
await page.close();
}); 

