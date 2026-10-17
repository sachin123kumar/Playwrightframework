import { Page } from "@playwright/test";

export class LoginPage {

    page: Page;

constructor(page:Page)
{
    this.page = page; 
}

loc_tb_username ="//input[@name='user_name']";
loc_tb_password = "//input[@name='user_password']";
loc_btn_login = "//input[@name='Login']";
loc_img_logo = "//img[@src='include/images/vtiger-crm.gif']";
loc_msg_err = "//*[contains(text(),'You must specify a valid username and password.')]";

async login(userid:string, passwrord:string):Promise<void>
{
   await this.setusername(userid);
    await this.setPassword(passwrord);
    await this.clickLogin();
}

async setusername(userid:string):Promise<void>
{
    await this.page.fill(this.loc_tb_username, userid);
}

async setPassword(passwrord:string):Promise<void>
{
    await this.page.fill(this.loc_tb_password, passwrord)
}

async clickLogin():Promise<void>
{
    await this.page.click(this.loc_btn_login);
}

async isLogoDisplayed():Promise<boolean>
{
 return await this.page.isVisible(this.loc_img_logo);
}

async iserrormsgdisplayed():Promise<boolean>
{
     return await this.page.isVisible(this.loc_msg_err);
}
};
