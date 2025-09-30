/**
 * CommonLocators
 *
 * Centralized repository for reusable dynamic XPath locators.
 * Each locator is defined as a function that accepts a parameter
 * (e.g., button name, field name) and returns the corresponding XPath.
 */

export const CommonLocators = {
  
  
  /**
   * Locator for a button element.
   * - Matches button text case-insensitively.
   *
   * Example:
   *   CommonLocators.buttonLocator("Add to Cart")
   *   → //button[contains(translate(normalize-space(string()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "add to cart")]
   */
  buttonLocator: (buttonName: string): string =>
    `//button[contains(
        translate(normalize-space(string()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
        "${buttonName.toLowerCase()}"
      )]`,

  
  
  
  /**
   * Locator for input fields or textareas.
   * - Matches based on placeholder, label, or name attributes.
   * - Also supports textarea inside a div with a label.
   *
   * Example:
   *   CommonLocators.inputFieldLocator("Email")
   *   → //input[@placeholder="Email" or @label="Email" or @name="Email"]
   *     | //textarea[@placeholder="Email" or @label="Email" or @name="Email"]
   *     | //div[div[label[contains(string(), "Email")]]]//textarea
   */
  inputFieldLocator: (fieldName: string): string =>
    `//input[@placeholder="${fieldName}" or @label="${fieldName}" or @name="${fieldName}"]
     | //textarea[@placeholder="${fieldName}" or @label="${fieldName}" or @name="${fieldName}"]
     | //div[div[label[contains(string(), "${fieldName}")]]]//textarea`,




  /**
   * Locator for a dropdown option.
   */
  dropdownOptionLocator: (optionName: string): string =>
    `//div[label[contains(text(), "${optionName}")]]/select`,




 /**
   * Locator for a checkbox option.
   */
  checkBoxLocator: (label: string): string =>
    `//div[label[contains(text(), "${label}")]]/input[@type="checkbox"]`,


     
 
};
