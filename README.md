

### Project Description
This project is an **end-to-end test automation framework** built using [Microsoft Playwright](https://playwright.dev/).  
It follows the **Page Object Model (POM)** design pattern for maintainability.

The framework is designed to:
- Automate user actions and assertions across web pages with meaningful error message
- Separate test logic from UI interactions
- Run on multiple browsers (Chromium, Firefox, WebKit)

---

### Framework Setup and Dependencies

#### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A GitHub account with repository access

#### Dependencies
The project uses:
- **Playwright** – Test automation framework
- **@playwright/test** – Playwright’s built-in test runner

You can find them in `package.json`.

Install all dependencies with:
```bash
npm install



How to Clone and Execute Tests
Clone the repository
git clone https://github.com/bhongzkee/playwright-ts-project-datacom.git
cd playwright-ts-project-datacom

Install dependencies
npm install
npx playwright install




Running the tests:
Run test by bash script and automatically generate and open the allure report

./run-tests.sh




Expected Test Outputs - 12 test cases failed due to site bugs
Herminios-MacBook-Pro:playwright-ts-project-datacom bhong$ ./run-tests.sh

Running 18 tests using 3 workers

  ✘   1 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:42:7 › Input Fields Valdations › First Name Input Field Should Not Accept All Numbers (11.4s)
  ✘   2 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:54:7 › Input Fields Valdations › Last Name Input Field Should Not Accept All Numbers (11.4s)
  ✘   3 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:67:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept All Letters (11.4s)
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter first name" filled with text: 0919123456789
The field "Enter last name" filled with text: TestUserLastName
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The field "Enter last name" filled with text: 0919123456789
The field "Enter phone number" filled with text: AllLettersInput
The optionn "Philippines" selected
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The field "Password" filled with text: Pass123
The button "Register" clicked
The button "Register" clicked
The button "Register" clicked
  ✘   4 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:80:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept Number and Letters (11.2s)
  ✘   5 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:93:7 › Input Fields Valdations › Email Input Field Should Not Accept Invalid Format (11.2s)
  ✘   6 [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:106:7 › Input Fields Valdations › Terms and Conditions Checkbox Should Be Checked To Submit The Form (11.2s)
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 12345AndLettersInput
The optionn "Philippines" selected
The field "Enter phone number" filled with text: 12345AndLettersInput
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The field "Enter email" filled with text: invalid.gmail.com
The field "Password" filled with text: Pass123
The field "Password" filled with text: Pass123
The button "Register" clicked
The button "Register" clicked
      7 …:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Last Name Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message
  ✓   8 …mNoFirstNameTests.spec.ts:55:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › First Name Submitted Info Should Be Matched On Results Section (1.3s)
  ✓   9 …pec.ts:50:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Form Should Be Submited Even First Name Input Field Is Blank - Not Required Field (1.3s)
The field "Enter first name" filled with text: 
The field "Enter first name" filled with text: 
The field "Enter last name" filled with text: TestUserLastName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The field "Enter first name" filled with text: 
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
  ✘   7 …mNoFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Last Name Submitted Info Should Be Matched On Results Section (11.2s)
Check Submitted Info Results: "First Name" with value ""
The button "Register" clicked
Check Validation Alert Message: Successfully registered the following information
  ✘  10 …tFormNoFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Phone Submitted Info Should Be Matched On Results Section (10.9s)
  ✘  11 …ormNoFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Country Submitted Info Should Be Matched On Results Section (11.0s)
The field "Enter first name" filled with text: 
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
The field "Enter first name" filled with text: 
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
  ✓  12 …itFormNoFirstNameTests.spec.ts:78:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Email Submitted Info Should Be Matched On Results Section (1.1s)
The field "Enter first name" filled with text: 
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
Check Submitted Info Results: "Email" with value "mail@gmail.com"
     13 …ormWithFirstNameTests.spec.ts:50:7 › Submit Form And Validate Result Section - With First Name › Form Should Be Submited Even First Name Input Field Is Blank - Not Required Field
     14 …Tests.spec.ts:61:7 › Submit Form And Validate Result Section - With First Name › Last Name Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message
     15 …n - With First Name › First Name Submitted Info Should Be Matched On Results Section › Before Hooks › beforeEach hook › Input On Text Field: Enter email with Text: mail@gmail.com
     15 …ult Section - With First Name › First Name Submitted Info Should Be Matched On Results Section › Before Hooks › beforeEach hook › Input On Text Field: Password with Text: Pass123
     15 …t Form And Validate Result Section - With First Name › First Name Submitted Info Should Be Matched On Results Section › Before Hooks › beforeEach hook › Click On Button: Register
     15 …ests.spec.ts:55:7 › Submit Form And Validate Result Section - With First Name › First Name Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message
  ✓  13 …FirstNameTests.spec.ts:50:7 › Submit Form And Validate Result Section - With First Name › Form Should Be Submited Even First Name Input Field Is Blank - Not Required Field (1.2s)
  ✓  15 …s/ui/submitFormWithFirstNameTests.spec.ts:55:7 › Submit Form And Validate Result Section - With First Name › First Name Submitted Info Should Be Matched On Results Section (1.2s)
The field "Password" filled with text: Pass123
The button "Register" clicked
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
Check Validation Alert Message: Successfully registered the following information
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
  ✘  14 …s/ui/submitFormWithFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - With First Name › Last Name Submitted Info Should Be Matched On Results Section (11.1s)
The field "Password" filled with text: Pass123
The button "Register" clicked
Check Submitted Info Results: "First Name" with value "TestUserFirstName"
  ✘  16 …tests/ui/submitFormWithFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - With First Name › Phone Submitted Info Should Be Matched On Results Section (11.0s)
  ✘  17 …sts/ui/submitFormWithFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - With First Name › Country Submitted Info Should Be Matched On Results Section (11.0s)
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
  ✓  18 …/tests/ui/submitFormWithFirstNameTests.spec.ts:78:7 › Submit Form And Validate Result Section - With First Name › Email Submitted Info Should Be Matched On Results Section (1.4s)
The field "Enter first name" filled with text: TestUserFirstName
The field "Enter last name" filled with text: TestUserLastName
The field "Enter phone number" filled with text: 0919123456789
The optionn "Philippines" selected
The field "Enter email" filled with text: mail@gmail.com
The field "Password" filled with text: Pass123
The button "Register" clicked
Check Submitted Info Results: "Email" with value "mail@gmail.com"


  1) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:42:7 › Input Fields Valdations › First Name Input Field Should Not Accept All Numbers › Check UI Validation Error Message 

    Error: The expected Alert Message was NOT found: ->> expect(locator).not.toHaveText(expected) failed

    Locator: locator('//div[@class="alert alert-danger"][@id="message"]')
    Expected string: not "Successfully registered the following information"
    Received string: "Successfully registered the following information"
    Timeout: 10000ms

    Call log:
      - Expect "not toHaveText" with timeout 10000ms
      - waiting for locator('//div[@class="alert alert-danger"][@id="message"]')
        14 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
           - unexpected value "Successfully registered the following information"


       at ../pages/challengePage.ts:61

      59 |         await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      60 |       } catch (error: any) {
    > 61 |         throw new Error(
         |               ^
      62 |           `The expected Alert Message was NOT found: ->> ${error.message || error}`
      63 |         );
      64 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:61:15
        at ChallengePage.checkValidationAlertMessageNotToBe (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:56:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:50:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--ef5de-ould-Not-Accept-All-Numbers-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--ef5de-ould-Not-Accept-All-Numbers-Chromium-Browser/error-context.md

  2) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:54:7 › Input Fields Valdations › Last Name Input Field Should Not Accept All Numbers › Check UI Validation Error Message 

    Error: The expected Alert Message was NOT found: ->> expect(locator).not.toHaveText(expected) failed

    Locator: locator('//div[@class="alert alert-danger"][@id="message"]')
    Expected string: not "Successfully registered the following information"
    Received string: "Successfully registered the following information"
    Timeout: 10000ms

    Call log:
      - Expect "not toHaveText" with timeout 10000ms
      - waiting for locator('//div[@class="alert alert-danger"][@id="message"]')
        14 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
           - unexpected value "Successfully registered the following information"


       at ../pages/challengePage.ts:61

      59 |         await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      60 |       } catch (error: any) {
    > 61 |         throw new Error(
         |               ^
      62 |           `The expected Alert Message was NOT found: ->> ${error.message || error}`
      63 |         );
      64 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:61:15
        at ChallengePage.checkValidationAlertMessageNotToBe (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:56:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:62:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--fc095-ould-Not-Accept-All-Numbers-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--fc095-ould-Not-Accept-All-Numbers-Chromium-Browser/error-context.md

  3) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:67:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept All Letters › Check UI Validation Error Message 

    Error: The expected Alert Message was NOT found: ->> expect(locator).not.toHaveText(expected) failed

    Locator: locator('//div[@class="alert alert-danger"][@id="message"]')
    Expected string: not "Successfully registered the following information"
    Received string: "Successfully registered the following information"
    Timeout: 10000ms

    Call log:
      - Expect "not toHaveText" with timeout 10000ms
      - waiting for locator('//div[@class="alert alert-danger"][@id="message"]')
        14 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
           - unexpected value "Successfully registered the following information"


       at ../pages/challengePage.ts:61

      59 |         await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      60 |       } catch (error: any) {
    > 61 |         throw new Error(
         |               ^
      62 |           `The expected Alert Message was NOT found: ->> ${error.message || error}`
      63 |         );
      64 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:61:15
        at ChallengePage.checkValidationAlertMessageNotToBe (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:56:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:75:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--dddb7-ould-Not-Accept-All-Letters-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--dddb7-ould-Not-Accept-All-Letters-Chromium-Browser/error-context.md

  4) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:80:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept Number and Letters › Check UI Validation Error Message 

    Error: The expected Alert Message was NOT found: ->> expect(locator).not.toHaveText(expected) failed

    Locator: locator('//div[@class="alert alert-danger"][@id="message"]')
    Expected string: not "Successfully registered the following information"
    Received string: "Successfully registered the following information"
    Timeout: 10000ms

    Call log:
      - Expect "not toHaveText" with timeout 10000ms
      - waiting for locator('//div[@class="alert alert-danger"][@id="message"]')
        14 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
           - unexpected value "Successfully registered the following information"


       at ../pages/challengePage.ts:61

      59 |         await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      60 |       } catch (error: any) {
    > 61 |         throw new Error(
         |               ^
      62 |           `The expected Alert Message was NOT found: ->> ${error.message || error}`
      63 |         );
      64 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:61:15
        at ChallengePage.checkValidationAlertMessageNotToBe (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:56:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:88:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--1add4-t-Accept-Number-and-Letters-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--1add4-t-Accept-Number-and-Letters-Chromium-Browser/error-context.md

  5) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:93:7 › Input Fields Valdations › Email Input Field Should Not Accept Invalid Format › Check UI Validation Error Message 

    Error: The expected Alert Message was NOT found: ->> expect(locator).not.toHaveText(expected) failed

    Locator: locator('//div[@class="alert alert-danger"][@id="message"]')
    Expected string: not "Successfully registered the following information"
    Received string: "Successfully registered the following information"
    Timeout: 10000ms

    Call log:
      - Expect "not toHaveText" with timeout 10000ms
      - waiting for locator('//div[@class="alert alert-danger"][@id="message"]')
        14 × locator resolved to <div role="alert" id="message" class="alert alert-danger">Successfully registered the following information</div>
           - unexpected value "Successfully registered the following information"


       at ../pages/challengePage.ts:61

      59 |         await expect(this.page.locator(locatorElement)).not.toHaveText(message);
      60 |       } catch (error: any) {
    > 61 |         throw new Error(
         |               ^
      62 |           `The expected Alert Message was NOT found: ->> ${error.message || error}`
      63 |         );
      64 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:61:15
        at ChallengePage.checkValidationAlertMessageNotToBe (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:56:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:101:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--93935-d-Not-Accept-Invalid-Format-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--93935-d-Not-Accept-Invalid-Format-Chromium-Browser/error-context.md

  6) [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:106:7 › Input Fields Valdations › Terms and Conditions Checkbox Should Be Checked To Submit The Form › Select Checkbox: I agree with the terms and conditions 

    Error: The checkbox "I agree with the terms and conditions" was NOT enabled: ->> expect(locator).toBeEnabled() failed

    Locator:  locator('//div[label[contains(text(), "I agree with the terms and conditions")]]/input[@type="checkbox"]')
    Expected: enabled
    Received: disabled
    Timeout:  10000ms

    Call log:
      - Expect "toBeEnabled" with timeout 10000ms
      - waiting for locator('//div[label[contains(text(), "I agree with the terms and conditions")]]/input[@type="checkbox"]')
        14 × locator resolved to <input disabled type="checkbox" id="exampleCheck1" class="form-check-input"/>
           - unexpected value "disabled"


       at ../pages/commonUserActionsPage.ts:97

       95 |         await expect(locatorElement).toBeEnabled();
       96 |       } catch (error: any) {
    >  97 |         throw new Error(
          |               ^
       98 |           `The checkbox "${label}" was NOT enabled: ->> ${error.message || error}`
       99 |         );
      100 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/commonUserActionsPage.ts:97:15
        at UserActionsPage.selectCheckbox (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/commonUserActionsPage.ts:91:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/inputFieldsValidations.spec.ts:113:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-inputFieldsValidations--2c748--Checked-To-Submit-The-Form-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-inputFieldsValidations--2c748--Checked-To-Submit-The-Form-Chromium-Browser/error-context.md

  7) [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Last Name Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Last Name" with value "TestUserLastName" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Last Name")]')
    Expected string: "Last Name: TestUserLastName"
    Received string: "Last Name: TestUserLastNam"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Last Name")]')
        14 × locator resolved to <div id="resultLn">Last Name: TestUserLastNam</div>
           - unexpected value "Last Name: TestUserLastNam"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormNoFirstNameTests.spec.ts:62:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormNoFirstNameTe-44304--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormNoFirstNameTe-44304--Matched-On-Results-Section-Chromium-Browser/error-context.md

  8) [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Phone Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Phone Number" with value "0919123456789" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Phone Number")]')
    Expected string: "Phone Number: 0919123456789"
    Received string: "Phone Number: 09191234567810"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Phone Number")]')
        14 × locator resolved to <div id="resultPhone">Phone Number: 09191234567810</div>
           - unexpected value "Phone Number: 09191234567810"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormNoFirstNameTests.spec.ts:68:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormNoFirstNameTe-6705e--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormNoFirstNameTe-6705e--Matched-On-Results-Section-Chromium-Browser/error-context.md

  9) [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Country Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Country" with value "Philippines" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Country")]')
    Expected string: "Country: Philippines"
    Received string: "Country: Phillipines"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Country")]')
        14 × locator resolved to <div id="country">Country: Phillipines</div>
           - unexpected value "Country: Phillipines"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormNoFirstNameTests.spec.ts:74:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormNoFirstNameTe-d0eb9--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormNoFirstNameTe-d0eb9--Matched-On-Results-Section-Chromium-Browser/error-context.md

  10) [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - With First Name › Last Name Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Last Name" with value "TestUserLastName" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Last Name")]')
    Expected string: "Last Name: TestUserLastName"
    Received string: "Last Name: TestUserLastNam"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Last Name")]')
        14 × locator resolved to <div id="resultLn">Last Name: TestUserLastNam</div>
           - unexpected value "Last Name: TestUserLastNam"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormWithFirstNameTests.spec.ts:62:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormWithFirstName-c3b5a--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormWithFirstName-c3b5a--Matched-On-Results-Section-Chromium-Browser/error-context.md

  11) [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - With First Name › Phone Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Phone Number" with value "0919123456789" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Phone Number")]')
    Expected string: "Phone Number: 0919123456789"
    Received string: "Phone Number: 09191234567810"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Phone Number")]')
        14 × locator resolved to <div id="resultPhone">Phone Number: 09191234567810</div>
           - unexpected value "Phone Number: 09191234567810"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormWithFirstNameTests.spec.ts:68:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormWithFirstName-eb0a6--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormWithFirstName-eb0a6--Matched-On-Results-Section-Chromium-Browser/error-context.md

  12) [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - With First Name › Country Submitted Info Should Be Matched On Results Section › Check UI Validation Error Message 

    Error: The info results for "Country" with value "Philippines" not found: ->> expect(locator).toHaveText(expected) failed

    Locator: locator('//div[@id="results-section"]/div[contains(text(), "Country")]')
    Expected string: "Country: Philippines"
    Received string: "Country: Phillipines"
    Timeout: 10000ms

    Call log:
      - Expect "toHaveText" with timeout 10000ms
      - waiting for locator('//div[@id="results-section"]/div[contains(text(), "Country")]')
        14 × locator resolved to <div id="country">Country: Phillipines</div>
           - unexpected value "Country: Phillipines"


       at ../pages/challengePage.ts:84

      82 |         await expect(this.page.locator(locatorElement)).toHaveText(`${fieldName}: ${value}`);
      83 |       } catch (error: any) {
    > 84 |         throw new Error(
         |               ^
      85 |           `The info results for "${fieldName}" with value "${value}" not found: ->> ${error.message || error}`
      86 |         );
      87 |       }
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:84:15
        at ChallengePage.checkSubmittedInfoResults (/Users/bhong/Documents/playwright-ts-project-datacom/src/pages/challengePage.ts:79:5)
        at /Users/bhong/Documents/playwright-ts-project-datacom/src/tests/ui/submitFormWithFirstNameTests.spec.ts:74:5

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ui-submitFormWithFirstName-18d26--Matched-On-Results-Section-Chromium-Browser/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/ui-submitFormWithFirstName-18d26--Matched-On-Results-Section-Chromium-Browser/error-context.md

  12 failed
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:42:7 › Input Fields Valdations › First Name Input Field Should Not Accept All Numbers 
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:54:7 › Input Fields Valdations › Last Name Input Field Should Not Accept All Numbers 
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:67:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept All Letters 
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:80:7 › Input Fields Valdations › Phone Number Input Field Should Not Accept Number and Letters 
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:93:7 › Input Fields Valdations › Email Input Field Should Not Accept Invalid Format 
    [Chromium Browser] › src/tests/ui/inputFieldsValidations.spec.ts:106:7 › Input Fields Valdations › Terms and Conditions Checkbox Should Be Checked To Submit The Form 
    [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Last Name Submitted Info Should Be Matched On Results Section 
    [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Phone Submitted Info Should Be Matched On Results Section 
    [Chromium Browser] › src/tests/ui/submitFormNoFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - First Name Input Field Is Blank › Country Submitted Info Should Be Matched On Results Section 
    [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:61:7 › Submit Form And Validate Result Section - With First Name › Last Name Submitted Info Should Be Matched On Results Section 
    [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:67:7 › Submit Form And Validate Result Section - With First Name › Phone Submitted Info Should Be Matched On Results Section 
    [Chromium Browser] › src/tests/ui/submitFormWithFirstNameTests.spec.ts:73:7 › Submit Form And Validate Result Section - With First Name › Country Submitted Info Should Be Matched On Results Section 
  6 passed (50.1s)
Report successfully generated to ./allure-reports/generated-allure-report-20250930_105431
Starting web server...
Server started at <http://127.0.0.1:50906>. Press <Ctrl+C> to exit





Run a specific test file
npx playwright test submitFormNoFirstNameTests.spec.ts

Generate and view HTML report
npx playwright test --reporter=html
npx playwright show-report

