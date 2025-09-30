/**
 * ChallengePageLocators
 *
 * Dynamic XPath locators for elements on the Challenge Page.
 * Each locator is a function that returns a selector string
 * based on the provided parameter.
 */

export const ChallengePageLocators = {


  /**
   * Locator for the alert message displayed on the Challenge Page.
   *
   * Example:
   *   ChallengePageLocators.alertMessageLocator()
   *   → //div[@class="alert alert-danger"][@id="message"]
   */
  alertMessageLocator: (): string =>
    `//div[@class="alert alert-danger"][@id="message"]`,





  /**
   * Locator for submitted item field result on the Challenge Page.
   *
   * Example:
   *   ChallengePageLocators.itemFieldResultLocator(First Name)
   *   → //div[@id="results-section"]/div[contains(text(), "${fieldName}")]
   */
  itemFieldResultLocator: (fieldName: string): string =>
    `//div[@id="results-section"]/div[contains(text(), "${fieldName}")]`,

  




  
};
