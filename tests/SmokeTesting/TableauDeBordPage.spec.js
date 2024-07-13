const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

let poManager, loginPage, tableauDeBordPage, searchPage, helpPage, notificationPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    tableauDeBordPage = poManager.getTableauDeBordPage();
    searchPage = poManager.getSearchPage();
    helpPage = poManager.getHelpPage();
    notificationPage = poManager.getNotificationPage();
});

async function login() {
    await loginPage.goTo();
    await loginPage.validLogIn("test.md", "ZAQ!2wsx");
}

test('@Smoke: Open Tableau du Bord page', async () => {
    await login();
    await tableauDeBordPage.verifyPageTitle();
});

test('@Smoke: Search with empty data', async ({ page }) => {
    await login();
    await searchPage.clickOnSearchInput();
    await searchPage.clickOnRechercherButton();
    const errorText = await searchPage.getEmptySearchErrorText();
    expect(errorText).toContain('Veuillez saisir votre recherche');
});

test('@Smoke: Valid search', async ({ page }) => {
    await login();
    await searchPage.clickOnSearchInput();
    await searchPage.typeSearchData('test');
    await searchPage.clickOnRechercherButton();
    await searchPage.verifyTableHasRows();
});

test('@Smoke: Invalid search', async ({ page }) => {
    await login();
    await searchPage.clickOnSearchInput();
    await searchPage.typeSearchData('kjdjgasidguasjkdas');
    await searchPage.clickOnRechercherButton();
    await searchPage.verifyTableHasNoRows();
});

test('@Smoke: Open Manuel Dutilisation', async ({ page }) => {
    await login();
    await helpPage.clickOnHelpButton();
    const manuelDutilisationHref = await helpPage.getManuelDutilisation();
    expect(manuelDutilisationHref).toContain('https://www.e-docpro.fr/api/shared/document/709d3c04-a7c0-11ed-8752-d85ed343cfb3/Manuel%20GED.pdf');
    await helpPage.clickOnManuelDutilisationButton();
});

test('@Smoke: Open Aide En Ligne', async ({ page }) => {
    await login();
    await helpPage.clickOnHelpButton();
    const aideEnLigneHref = await helpPage.getAideEnLigneHref();
    expect(aideEnLigneHref).toContain('https://gedeukles.zendesk.com/hc/fr');
    await helpPage.clickOnAideEnLigneButton();
});

test('@Smoke4: Verify Infos Pratiques ', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnNotificationButton();
    await page.waitForTimeout(3000);
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnInfosPratiquesButton();
    await notificationPage.verifyIfInfosPratiquesModalIsDisplayed();
});

test('@Smoke4: Verify Validation Detape De Workflow', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnValidationDetapeDeWorkflowButton();
    await notificationPage.verifyPageLink('/page/workflows/processes/pending');
});

test('@Smoke4: Verify Bulletins De Paie En AttenteDenvoi', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnBulletinsDePaieEnAttenteDenvoiButton();
    await notificationPage.verifyPageLink('/page/digiposte/sendingBox');
});

test('@Smoke4: Verify Decoupes En Attente', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnDecoupesEnAttenteButton();
    await notificationPage.verifyPageLink('/page/autocut/queue');
});

test('@Smoke4: Verify Rapports Dabonements Non Lus', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnRapportsDabonementsNonLusButton();
    await notificationPage.verifyPageLink('/index.php?do=fsListReportsBySubscription');
});

test('@Smoke4: Verify Doublons Detectes', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnDoublonsDetectesButton();
    await notificationPage.verifyPageLink('/page/duplicate/list');
});

test('@Smoke4: Verify Alarmes Depassees', async ({ page }) => {
    await login();
    await notificationPage.clickOnNotificationButton();
    await notificationPage.clickOnAlarmesDepasseesButton();
    await notificationPage.verifyAlarmesDepasseesModalIsDisplayed();
});


