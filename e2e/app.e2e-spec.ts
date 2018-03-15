import { Page } from './app.po';
import { browser, element, by } from 'protractor';

describe('App E2E Test', () => {

  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title', () => {
      Page.getTitle().then(title => {
        expect(title).toBe('Todos');
      });
    });

    it('should have a navbar', () => {
      Page.getNavBar().then(present => {
        expect(present).toBe(true);
      });
    });
  });

  describe('HomePage', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should display 3 items', () => {
      page.getListItems().then(data => {
        expect(data.length).toBe(3);
      });
    });

    it('should submit 2 form fields', () => {
      page.getNameInput().sendKeys('New Todo');
      page.getInfoInput().sendKeys('my description');

      page.submitForm().then(() => {
        browser.sleep(1000);
        page.getListItems().then(data => {
          expect(data.length).toBe(4);
          expect(data[3].getText()).toContain('New Todo');
        });
      });
    });
  });


});