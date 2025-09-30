import { test, expect, Page } from '@playwright/test';
import { ChallengePageLocators } from '../locators/challengePageLocators';

export class ChallengePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * This method checks if the page has specific text.
   * Usage:
   *   await challengePage.waitForPageToHaveText("text to wait for", timeout);
   */
  async waitForPageToHaveText(text: string, timeout: number = 10000): Promise<void> {
    await this.page.waitForFunction(
      (expected: string) => document.body.innerText.includes(expected),
      text,
      { timeout }
    );
    console.log(`The text "${text}" is found on the page.`);
  }






  /**
   * Check UI Validation Alert Message
   * Usage:
   *   await challengePage.checkValidationAlertMessage('Successfully registered the following information');
   */
  async checkValidationAlertMessage(message: string): Promise<void> {
    await test.step(`Check UI Validation Error Message`, async () => {
      const locatorElement = ChallengePageLocators.alertMessageLocator();
      try {
        await expect(this.page.locator(locatorElement)).toHaveText(message);
      } catch (error: any) {
        throw new Error(
          `The expected Alert Message was NOT found: ->> ${error.message || error}`
        );
      }
      console.log(`Check Validation Alert Message: ${message}`);
    });
  }






  /**
   * Check UI Validation Alert Message Not To Be
   * Usage:
   *   await challengePage.checkValidationAlertMessageNotToBe('Successfully registered the following information');
   */
  async checkValidationAlertMessageNotToBe(message: string): Promise<void> {
    await test.step(`Check UI Validation Error Message`, async () => {
      const locatorElement = ChallengePageLocators.alertMessageLocator();
      try {
        await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      } catch (error: any) {
        throw new Error(
          `The expected Alert Message was NOT found: ->> ${error.message || error}`
        );
      }
      console.log(`Check Validation Alert Message: ${message}`);
    });
  }







  /**
   * Check Submitted Info Results
   */
  async checkSubmittedInfoResults(fieldName: string, value: string): Promise<void> {
    await test.step(`Check UI Validation Error Message`, async () => {
      const locatorElement = ChallengePageLocators.itemFieldResultLocator(fieldName);
      try {
        await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      } catch (error: any) {
        throw new Error(
          `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
        );
      }
      console.log(`Check Submitted Info Results: "${fieldName}" with value "${value}"`);
    });
  }











}
