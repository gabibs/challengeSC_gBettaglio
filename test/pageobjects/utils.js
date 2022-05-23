import { default as Page } from "./page.js";
import { default as HomePage } from "./home.page.js";
import { default as SettingsPage } from "./settings.page.js";

class Utils extends Page {


    async changeTheme() {
        let homePage = new HomePage();
        let settingsPage = new SettingsPage();
        await homePage.btnSearch.click();
        await homePage.btnThemes.click();
        await settingsPage.btnTerminalTheme.click();
        await settingsPage.btnSave.click();
    }
}

export default Utils;
