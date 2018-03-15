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


});