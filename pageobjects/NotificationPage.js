const {expect} = require("@playwright/test");

class NotificationPage {
    constructor(page) {
        this.page = page;
        this.notificationButton = page.locator('.menuNotification i');
        this.infosPratiquesButton = page.locator('#practicalInformationBlock');
        this.validationDetapeDeWorkflowButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/page/workflows/processes/pending\']\n');
        this.bulletinsDePaieEnAttenteDenvoiButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/page/digiposte/sendingBox\']\n')
        this.decoupesEnAttenteButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/page/autocut/queue\']\n')
        this.rapportsDabonementsNonLusButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/index.php?do=fsListReportsBySubscription\']\n')
        this.doublonsDetectesButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/page/duplicate/list\']\n')
        this.alarmesDepasseesButton = page.locator('//li[@class=\'nav-item\']/a[@href=\'/allAlarmsBtn\']\n')
        this.alarmesDepasseesModal = page.locator('.ui-draggable');

    }

    async clickOnNotificationButton() {
        await this.notificationButton.click();
    }

    async clickOnInfosPratiquesButton() {
        await this.infosPratiquesButton.click();
    }

    async verifyIfInfosPratiquesModalIsDisplayed() {
        const displayValue = await this.page.evaluate(() => {
            const element = document.querySelector('.css-1ar92ht');
            return window.getComputedStyle(element).display;
        });
        expect(displayValue).toBe('flex');


    }

    async clickOnValidationDetapeDeWorkflowButton() {
        await this.validationDetapeDeWorkflowButton.click();
    }

    async clickOnBulletinsDePaieEnAttenteDenvoiButton() {
        await this.bulletinsDePaieEnAttenteDenvoiButton.click();
    }

    async clickOnDecoupesEnAttenteButton() {
        await this.decoupesEnAttenteButton.click();
    }

    async clickOnRapportsDabonementsNonLusButton() {
        await this.rapportsDabonementsNonLusButton.click();
    }

    async clickOnDoublonsDetectesButton() {
        await this.doublonsDetectesButton.click();
    }

    async clickOnAlarmesDepasseesButton() {
        await this.alarmesDepasseesButton.click();
    }

    async verifyAlarmesDepasseesModalIsDisplayed() {
        await this.alarmesDepasseesModal.waitFor({state: 'visible'});
        const displayValue = await this.alarmesDepasseesModal.evaluate(el => window.getComputedStyle(el).display);
        expect(displayValue).toBe('flex'); // Adjust based on your CSS
    }

    async verifyPageLink(link) {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain(link);
    }


}

module.exports = {NotificationPage};