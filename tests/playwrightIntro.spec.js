// const {test} = require("@playwright/test")
import { test } from "@playwright/test";

test("Simple Google search test @google01", async ({page}) => { 

    await page.goto("https://www.google.com/");

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    await page.waitForTimeout(3000);

    // await searchBox.type("Playwright Automation");
    await searchBox.fill("Playwright Automation");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");

    await page.waitForTimeout(3000);


});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" jsaction="paste:puy29d;" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" 
name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwji0N2yyvWJAxX2L1kFHRbiL_MQ39UDCAY" 
aria-activedescendant="" style=""></textarea>
*/

//textarea[@class='gLFyf']


test("Simple youtube search test @youtube01", async ({page}) => {

    await page.goto("https://www.youtube.com/");

})