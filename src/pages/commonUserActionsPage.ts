import { test, Page, expect } from '@playwright/test';
import { CommonLocators } from '../locators/commonLocators';

export class UserActionsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  
  /**
   * Click on button method that can cover any page.
   * Usage:
   *   await userAction.clickOnButton("Add to Cart");
   */
  async clickOnButton(buttonName: string): Promise<void> {
    await test.step(`Click On Button: ${buttonName}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.buttonLocator(buttonName));
      try {
        await locatorElement.first().waitFor({ state: 'visible', timeout: 60000 });
      } catch (error: any) {
        throw new Error(
          `The button "${buttonName}" to be clicked is NOT visible: ->> ${error.message || error}`
        );
      }
      await locatorElement.first().click();
      console.log(`The button "${buttonName}" clicked`);
    });
  }





  /**
   * Input on text field method that can cover any page.
   * Usage:
   *   await userAction.inputOnTextField("Email", "test@example.com");
   */
  async inputOnTextField(fieldName: string, text: string): Promise<void> {
    await test.step(`Input On Text Field: ${fieldName} with Text: ${text}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.inputFieldLocator(fieldName));
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 20000 });
      } catch (error: any) {
        throw new Error(
          `The field "${fieldName}" is NOT visible: ->> ${error.message || error}`
        );
      }
      await locatorElement.fill(text);
      console.log(`The field "${fieldName}" filled with text: ${text}`);
    });
  }





  /**
   * Select From Dropdown Option.
   * Usage:
   *   await userAction.clickOnButton("Add to Cart");
   */
  async selectFromDropdownOption(dropDownLabel: string, optionName: string): Promise<void> {
    await test.step(`Select From Dropdown Option: ${optionName}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.dropdownOptionLocator(dropDownLabel));
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 20000 });
      } catch (error: any) {
        throw new Error(
          `The dropdown option "${optionName}" was NOT found: ->> ${error.message || error}`
        );
      }
      await locatorElement.selectOption(optionName);
      console.log(`The optionn "${optionName}" selected`);
    });
  }




  /**
   * Select Checknoxn.
   * Usage:
   *   await userAction.selectCheckbox("I agree to the Terms and Conditions");
   */
  async selectCheckbox(label: string): Promise<void> {
    await test.step(`Select Checkbox: ${label}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.checkBoxLocator(label));

      try {
        await expect(locatorElement).toBeEnabled();
      } catch (error: any) {
        throw new Error(
          `The checkbox "${label}" was NOT enabled: ->> ${error.message || error}`
        );
      }


      try {
        await locatorElement.check();
        await expect(locatorElement).toBeChecked();
      } catch (error: any) {
        throw new Error(
          `The checkbox "${label}" was NOT found: ->> ${error.message || error}`
        );
      }
      
      console.log(`The checkbox "${label}" checked`);
    });
  }




}
