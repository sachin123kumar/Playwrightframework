import { Page } from "@playwright/test";
export class HomePage{
    page:Page;
    constructor(page:Page)
    {
        this.page =page;
    }

loc_lnk_Newlead ="//a[text()='New Lead']";
loc_lnk_leads ="//a[text()='Leads']";
loc_lnk_logout ="//a[text()='Logout']";


async clickNewlead():Promise<void>
{
    await this.page.click(this.loc_lnk_Newlead);
} 

async clickLead():Promise<void>
{
    await this.page.click(this.loc_lnk_leads)
}

async clicklogout():Promise<void>
{
    await this.page.click(this.loc_lnk_logout)
}
}

