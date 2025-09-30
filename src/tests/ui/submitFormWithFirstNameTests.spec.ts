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

  await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
  await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
  await userAction.inputOnTextField('Enter phone number', '0919123456789');
  await userAction.selectFromDropdownOption('Country', 'Philippines');
  await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
  await userAction.inputOnTextField('Password', 'Pass123');
  await userAction.clickOnButton('Register');

});

test.afterEach(async () => {
  // Close browser context after all tests
  await browserManager.close();
});





test.describe('Submit Form And Validate Result Section - With First Name', () => {


  test('Form Should Be Submited Even First Name Input Field Is Blank - Not Required Field', async () => {
    await challengePage.checkValidationAlertMessage('Successfully registered the following information');
  });


  test('First Name Submitted Info Should Be Matched On Results Section', async () => {
    await challengePage.checkSubmittedInfoResults('First Name', 'TestUserFirstName');
  });


  // Failed due to a bug in the application - actual result is "Last Name: TestUserLastNam" instead of "Last Name: TestUserLastName"
  test('Last Name Submitted Info Should Be Matched On Results Section', async () => {
    await challengePage.checkSubmittedInfoResults('Last Name', 'TestUserLastName');
  });


  // Failed due to a bug in the application - actual result is "Phone Number: 09191234567810" instead of "Phone Number: 0919123456789"
  test('Phone Submitted Info Should Be Matched On Results Section', async () => {
    await challengePage.checkSubmittedInfoResults('Phone Number', '0919123456789');
  });


  // Failed due to a bug in the application - actual result is "Country: Phillipines" instead of "Country: Philippines"
  test('Country Submitted Info Should Be Matched On Results Section', async () => {
    await challengePage.checkSubmittedInfoResults('Country', 'Philippines');
  });


  test('Email Submitted Info Should Be Matched On Results Section', async () => {
    await challengePage.checkSubmittedInfoResults('Email', 'mail@gmail.com');
  });








  
});
