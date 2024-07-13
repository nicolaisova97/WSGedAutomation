const {expect} = require("@playwright/test");

class MonComptePage {
    constructor(page) {
        this.page = page;
        this.myProfileLogo = page.locator('#initialMenu');
        this.monCompteButton = page.locator('//a[@href="/page/account/general"]');
        this.informationsPersonnellesButton = page.locator('//a[@href="/page/account/general"]');
        this.carnetDadressesButton = page.locator('//a[@href="/page/account/contacts"]');
        this.gestionDesParaphesButton = page.locator('//a[@href="/page/account/paraphManager"]');
        this.parametresButton = page.locator('//a[@href="/page/account/settings"]');
        this.connectionsExternesButton = page.locator('//a[@href="/page/account/connections"]');
        this.autresInformationsButton = page.locator('//a[@href="/page/account/info"]');
    }

    async clickOnMyProfileLogo()
    {
        await this.myProfileLogo.click();
    }

    async clickOnMonCompteButton()
    {
        await this.monCompteButton.click();
    }

    async clickOnInformationsPersonnellesButton()
    {
        await this.informationsPersonnellesButton.click();
    }

    async clickOnCarnetDadressesButton()
    {
        await this.carnetDadressesButton.click();
    }

    async clickOnGestionDesParaphesButton()
    {
        await this.gestionDesParaphesButton.click();
    }

    async clickOnParametresButton()
    {
        await this.parametresButton.click();
    }

    async clickOnConnectionsExternesButton()
    {
        await this.connectionsExternesButton.click();
    }

    async clickOnAutresInformationsButton()
    {
        await this.autresInformationsButton.click();
    }

    async verifyPageLink(pageName)
    {
        const currentPageUrl = await this.page.url();
        expect(currentPageUrl).toContain(pageName);
    }


}

module.exports = {MonComptePage};