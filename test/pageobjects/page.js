/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    constructor(title) {
        this.title = 'Page';

    }

    async open(path) {
        return await browser.url("https://duckduckgo.com/");
    }
}