import HomePage from '../pageobjects/home.page';
import SearchResultsPage from '../pageobjects/searchResults.page';
import Utils from '../pageobjects/utils';
import testData from '../testData.json';

describe('DuckDuckGo search', () => {
    let homepage = new HomePage();


    it.skip('should display a picture of Michael Jordan', async () => {
        let homepage = new HomePage();
        let searchResultsPage = new SearchResultsPage();
        await homepage.open();
        await homepage.search(testData.searchValue1);
        let result = await browser.waitUntil(async () => (await searchResultsPage.image.isDisplayed()), {
            timeout: 1000
        })
        await expect(result).toBe.true;
    });

    it.skip('should be at least one Wikipedia page result', async () => {
        let homepage = new HomePage();
        let searchResultsPage = new SearchResultsPage();
        await homepage.open();
        await homepage.search(testData.searchValue1);
        let result = await searchResultsPage.resultsVerification(testData.wikipedia);
        expect(result).toBe(true);
    });

    it.skip('should be at least one NBA page result', async () => {
        let homepage = new HomePage();
        let searchResultsPage = new SearchResultsPage();
        await homepage.open();
        await homepage.search(testData.searchValue1);
        let results = await searchResultsPage.resultsVerification(testData.NBA);
        expect(results).toBe(true);
    });

    it.skip('should be able to change background color', async () => {
        let homepage = new HomePage();
        let utils = new Utils();
        await homepage.open();
        //await browser.waitUntil(async () => (await (await homepage.homePageBody).isDisplayed()) === true), {
        //    timeout: 30000, timeoutMsg: "Element is not Displayed", interval: 1000
        //};
        let backgroundBefore = await homepage.getBackgroundColor();
        await utils.changeTheme();
        let backgroundAfter = await homepage.getBackgroundColor();
        expect(backgroundBefore).toEqual(testData.initialColor);
        expect(backgroundAfter).toEqual(testData.finalColor);
    });

    it('should be able to retrieve API response', async () => {
        let homepage = new HomePage();
        let response = await homepage.apiResultVerification();

    });
});


