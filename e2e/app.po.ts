import { browser, element, by } from 'protractor';

export class CampusRecruitmentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
