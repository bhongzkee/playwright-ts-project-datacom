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





test.describe('Input Fields Valdations', () => {

  // Failed due to a bug in the application - accepted all numbers as valid input
  test('First Name Input Field Should Not Accept All Numbers', async () => {
    await userAction.inputOnTextField('Enter first name', '0919123456789');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '0919123456789');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });

  // Failed due to a bug in the application - accepted all numbers as valid input
  test('Last Name Input Field Should Not Accept All Numbers', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', '0919123456789');
    await userAction.inputOnTextField('Enter phone number', '0919123456789');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  // Failed due to a bug in the application - accepted all letters as valid input
  test('Phone Number Input Field Should Not Accept All Letters', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', 'AllLettersInput');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  // Failed due to a bug in the application - accepted letters and numbers as valid input
  test('Phone Number Input Field Should Not Accept Number and Letters', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '12345AndLettersInput');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  // Failed due to a bug in the application - invalid email format accepted
  test('Email Input Field Should Not Accept Invalid Format', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '12345AndLettersInput');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'invalid.gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });


  // Failed due to a bug in the application - unable to select checkbox
  test('Terms and Conditions Checkbox Should Be Checked To Submit The Form', async () => {
    await userAction.inputOnTextField('Enter first name', 'TestUserFirstName');
    await userAction.inputOnTextField('Enter last name', 'TestUserLastName');
    await userAction.inputOnTextField('Enter phone number', '0919123456789');
    await userAction.selectFromDropdownOption('Country', 'Philippines');
    await userAction.inputOnTextField('Enter email', 'mail@gmail.com');
    await userAction.inputOnTextField('Password', 'Pass123');
    await userAction.selectCheckbox('I agree with the terms and conditions');
    await userAction.clickOnButton('Register');
    await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
  });




  
});
