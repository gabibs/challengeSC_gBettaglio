import { default as Page } from './page.js';
import testData from '../testData.json'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultsPage extends Page {

    /**
     * define selectors using getter methods
     */
    get image() {
        return $('//*[@id="links_wrapper"]/div[2]/div[1]/div/div[1]/div/a');
    }

    get results() {
        return $('#links').$$('span');
    }

    get terminalOptn() {
        return $('/html/body/div[2]/div[7]/ul/ul[1]/li[2]/a');
    }

    get body() {
        return $('//*[@class="body--serp"]'); //TODO: use this in verification before and after change color:selector.getCSSProperty(background-color)
    }

    get allSettingsOptn() {
        return $('/html/body/div[2]/div[7]/ul/ul[1]/li[3]/a');
    }

    get languageSettings() {
        return $('//*[@id="setting_kad"]');
    }

    /**
     * @function getResultsText
     */
    async getResultsText() {
        let resultsSpans = await this.results;
        let resultsText = new Array();
        for (let i = 0; i < resultsSpans.length; i++) {
            resultsText.push(await (await resultsSpans[i].getText()));
        }
        return resultsText;
    }

    async resultsVerification(text) {
        let resultsText = await (await this.getResultsText());
        let foundText;
        foundText = await (await (await resultsText.includes(text)));
        if (foundText) {
            return true;
        } else {
            return false;
        }
    }

    async open() {
        await super.open(testData.url);
        await browser.maximizeWindow();
    }

    /**
     * @function getLanguageOptions
     */
    async getLanguageOptions() {
        let options = new Array();
        options = this.languageSettings.getHTML();
    }
}


export default SearchResultsPage;
