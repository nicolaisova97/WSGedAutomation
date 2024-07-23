const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
});

async function login() {
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
}

test('@Test: Test', async () => {
    for (let i = 0; i < 1000; i++) {
        await login();
    }
});
