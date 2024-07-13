class HelpPage {
    constructor(page) {
        this.page = page;
        this.context = page.context(); // Store the context from the page
        this.helpButton = page.locator("//i[contains(@class, 'far') and contains(@class, 'fa-question-circle')]");
        this.manuelDutilisationButton = page.locator('#linkManual a');
        this.aideEnLigneButton = page.locator('#linkZendesk a');
    }

    async clickOnHelpButton() {
        await this.helpButton.click();
    }

    async clickOnManuelDutilisationButton() {
        await this.manuelDutilisationButton.click();
    }

    async clickOnAideEnLigneButton() {
        await this.aideEnLigneButton.click();
    }

    async getManuelDutilisation() {
        return await this.manuelDutilisationButton.getAttribute('href');
    }

    async getAideEnLigneHref() {
        return await this.aideEnLigneButton.getAttribute('href');
    }



}

module.exports = { HelpPage };