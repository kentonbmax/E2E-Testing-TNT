import { element, browser, by, Key } from 'protractor';

export class HomePage {
	getPage() {
		// remove the line below when running against an angular site. 
        browser.waitForAngularEnabled(false)
		return browser.get('http://google.com');
	}

	getPageTitle() {
		return browser.getTitle();
	}

	getSearchBox() {
		return element(by.id('lst-ib'));
	}

	findLink(url: string) {
		return element(by.css(`[href="${url}"]`))
	}

}