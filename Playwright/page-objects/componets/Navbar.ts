import { expect, Locator, Page } from '@playwright/test'

export class Navbar {

    readonly page: Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFunds: Locator
    readonly payBills: Locator
    readonly myMoneyApp: Locator
    readonly onlineStatements: Locator


    constructor(page: Page) {
        this.page = page
        this.accountSummary = page.locator('#account_summary_link')
        this.accountActivity = page.locator('#account_activity_link')
        this.transferFunds = page.locator('#transfer_funds_link')
        this.payBills = page.locator('#pay_bills_link')
        this.myMoneyApp = page.locator('#money_map_link')
        this.onlineStatements = page.locator('#online_statements_link')

    }

    async clickOnTab(tabName) {

        switch (tabName) {
            case 'Account Summary':
                await this.accountSummary.click()
                break;
            case 'Account Activity':
                await this.accountActivity.click()
                break;
            case 'Transfer Funds':
                await this.transferFunds.click()
                break;
            case 'Pay Bills':
                await this.payBills.click()
                break;
            case 'My Money App':
                await this.myMoneyApp.click()
                break;
            case 'Online Statements':
                await this.onlineStatements.click()
                break;
            default:
                throw new Error('This Link does not exist...')
        }
    }
}