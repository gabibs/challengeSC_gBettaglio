import Page from './page';
import fetch from 'node-fetch';
const fs = require('fs');
const util = require('util');
const _ = require('underscore');

class ApiRequests extends Page {

    async async_fetch(url) {
        let response = await fetch(url)
        if (response.ok) return await response.json()
        throw new Error(response.status)
    }

    async apiDogsResultSaveFile(endpoint, level_0) {
        let response = await this.async_fetch(endpoint);
        let data = response[`${level_0}`];
        let items_1;
        let items_2;
        let items = new Array();

        function cleanResults(arr, value) {
            return arr.filter(function (elem) {
                return elem != value;
            });
        }

        function fetchFirstSet() {
            let iconItems = _.pluck(data, "Icon");
            iconItems = cleanResults(iconItems, null);
            items_1 = _.pluck(iconItems, "URL");
            items_1 = cleanResults(items_1, null);
            return items_1;
        }

        function fetchSecondSet() {
            let topicsItems = _.pluck(data, "Topics");
            topicsItems = cleanResults(topicsItems, null);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            topicsItems = _.reduceRight(topicsItems, function (a, b) { return a.concat(b); }, []);
            let iconItems = _.pluck(topicsItems, "Icon");
            iconItems = _.reduceRight(iconItems, function (a, b) { return a.concat(b); }, []);
            iconItems = cleanResults(iconItems, null);
            items_2 = _.pluck(iconItems, "URL");
            items_2 = cleanResults(items_2, null);
            items_2 = cleanResults(items_2, "");

            console.log('SECOND SET: ' + items_2);
            console.log('LENGTH: ' + items_2.length)
            return items_2;
        }

        items_1 = fetchFirstSet();
        items_2 = fetchSecondSet();
        items.push(items_1, items_2);
        let itemsStr = JSON.stringify(items);
        return itemsStr;

    }


    /*async readFileAndGetSize(pathToFile) {
 
        // Convert fs.readFile into Promise version of same
        let readFile = util.promisify(fs.readFile);
        let dataSize;
 
        function getSize() {
            return readFile(pathToFile);
        }
 
        getSize().then(data => {
            console.log(data.size);
            dataSize = data.size;
            return dataSize;
        })
    }*/


}
export default ApiRequests;