import { default as Page } from "../pageobjects/page.js";
import ApiRequests, { default as apiRequests } from "../pageobjects/apiRequests.page.js";
var _ = require('underscore');
var fs = require('fs');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    get inputSearch() {
        return $('//*[@id="search_form_input_homepage"]');
    }

    get btnSearch() {
        return $('//*[@id="search_button_homepage"]');
    }

    get btnSettings() {
        return $('//*[@id="pg-index"]/div/div[1]/div/a');
    }

    get btnThemes() {
        return $('//*[@id="pg-index"]/div/div[4]/ul/ul[1]/li[2]/a');
    }

    get homePageBody() {
        return $('body');
    }

    async open() {
        await super.open();
        await browser.maximizeWindow();
    }

    /**
     * @function search
     * @param (String) - searchValue
     */
    async search(searchValue) {
        await browser.waitUntil(async () => (await this.inputSearch).isDisplayedInViewport()), {
            timeout: 1000
        };
        await this.inputSearch.setValue(searchValue);
        await this.btnSearch.click();
    }

    async getBackgroundColor() { //TODO: Fix this
        await browser.pause(30000);
        let color = await this.homePageBody.getCSSProperty('background-color')
        let bckgColor = color["parsed"]["hex"];
        console.log('bckgColor: ' + bckgColor);
        return bckgColor;
    }

}

export default HomePage;
