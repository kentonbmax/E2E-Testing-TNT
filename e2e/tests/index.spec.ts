import { by, browser, element } from 'protractor';

import { HomePage } from '../pageObjects/home.page';
import { protractor } from 'protractor/built/ptor';

describe('Google page E2E test searcj', () => {
	const homePage = new HomePage();
	describe('home page should work fine', () => {
		beforeAll(() => {
			homePage.getPage();
		});
		
		it('should have right title', () => {
			homePage.getPageTitle()
				.then((title: string) => {
					expect(title).toEqual('Google');
				});
		})

		it('user can search', async () => {
			let expectedResult: string = 'https://www.protractortest.org/'
			homePage.getPageTitle()
				.then((title: string) => {
					expect(title).toEqual('Google');
				});

			let searchBox = homePage.getSearchBox();
			searchBox.sendKeys('Protractorjs');
			searchBox.sendKeys(protractor.Key.ENTER);
			homePage.findLink(expectedResult).isDisplayed().then(() => {
				homePage.findLink(expectedResult).getAttribute('href').then((text) => {
					expect(text).toEqual(expectedResult);
				})
				
			})
		})
	})
})