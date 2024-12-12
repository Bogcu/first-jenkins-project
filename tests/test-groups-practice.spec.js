import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check(): checks the radio button and checkbox if they havn't checked yet ", async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'");
    
    await checkboxesLink.click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");


    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();


  });

  test("Uncheck(): unchecks the radio button and checkbox if they havn't unchecked yet ", async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'");
    
    await checkboxesLink.click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");


    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

  });

  test("selectOption(): for drop down boxes", async ({ page }) => {

    let dropdownLink = page.getByText("Dropdown");

    await dropdownLink.click();

    let dropdownBox = page.locator("//select[@id='dropdown']");

    // pause for 3 seconds.
    await page.waitForTimeout(3000);

    // select by value:
   // await dropdownBox.selectOption("1");
   // await page.waitForTimeout(3000);


   // select by text:
  // await dropdownBox.selectOption({label: "Option 1"});
   //await page.waitForTimeout(3000);

   // select by index:
   await dropdownBox.selectOption({index: 1});
   await page.waitForTimeout(3000);

  });


  test("innerText(): retrives the visible text of the elment.", async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    let expectedText = "Test Automation Practice";

    await expect(headerElement).toHaveText(expectedText);

    //let actualText = await headerElement.innerText();
    //expect(actualText).toEqual(expectedText);

  });

  // come back at 11:55 am EST


});