// @smoke
import { test } from '@playwright/test';
import { Page, Browser } from '@playwright/test';
import { UserActionsPage } from '../../pages/commonUserActionsPage';
import { ChallengePage } from '../../pages/challengePage';
import { BrowserManager } from '../../helperUtils/browserManager';



let browserManager: BrowserManager;
let page: Page;
let userAction: UserActionsPage;
let challengePage: ChallengePage;



test.beforeEach(async ({ browser }: { browser: Browser }) => {
  // Create a single context and page for all tests
  browserManager = new BrowserManager();
  page = await browserManager.init(browser);

  // Initialize all POM instances once
  userAction = new UserActionsPage(page);
  challengePage = new ChallengePage(page);

  await browserManager.goto('/bugs-form');

});

test.afterEach(async () => {
  // Close browser context after all tests
  await browserManager.close();
});





test.describe('Required Fields Valdations', () => {

  // Failed due to a bug in the application - accepts no input
  test('Last Name Input Field Should Not  No Input', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', '');
    await userAction.inputOnTextField('Enter phone number', '0919123456789');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  test('Phone Number Input Field Should Not Accept  No Input', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessage('The phone number should contain at least 10 characters!');
  });


  // Failed due to a bug in the application - no input is accepted
  test('Email Input Field Should Not Accept No Input', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '12345AndLettersInput');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', '');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  test('Password Field Should Not Accept No Input', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '0919123456789');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', '');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessage('The password should contain between [6,20] characters!');
  });




  
});
