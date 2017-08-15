import { browser, by, element } from 'protractor';

export class InfiniteScrollPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('is-root h1')).getText();
  }
}
