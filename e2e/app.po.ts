import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return element(by.css('ion-title')).getText();
  }

  getNavBar() {
    return element(by.css('ion-navbar')).isPresent();
  }
  
}