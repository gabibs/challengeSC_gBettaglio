import Page from './page';
import XMLHttpRequest from 'node_modules/xhr2/lib/xhr2.js';

class ApiRequests extends Page {

    async httpGetAsync(url, callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true); // true for asynchronous 
        xmlHttp.send();
    }


}
export default ApiRequests;