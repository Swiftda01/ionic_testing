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

  getBackButton() {
    return element(by.css('ion-navbar .back-button'));
  }

  getListItems() {
    return element.all(by.css('ion-list ion-item'));
  }

  submitForm() {
    return element(by.id('submitBtn')).click();
  }

  clickItem(position) {
    return this.getListItems().get(position).click();
  }

  getNameInput() {
    return element(by.id('titleInput')).element(by.css('input'));
  }

  getInfoInput() {
    return element(by.id('infoInput')).element(by.css('input'));
  }
  
}