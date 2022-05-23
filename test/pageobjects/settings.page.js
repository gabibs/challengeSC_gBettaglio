
import { default as Page } from '../pageobjects/page.js';

class SettingsPage extends Page {

    //Selectors
    get btnTerminalTheme() {
        return $('//*[@id="content_internal"]/div[1]/div[1]/div[2]/form/div/div/div[6]/label[1]');
    }

    get btnSave() {
        return $('//*[@id="content_internal"]/div[1]/div[1]/div[3]/a');
    }

    async open() {
        await super.open('settings');
        await browser.maximizeWindow();
    }

}

export default SettingsPage;