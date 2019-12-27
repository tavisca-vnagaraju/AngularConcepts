import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url:string) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('app-header .toolbar h1')).getText();
  }
  getButton(number:number){
    return element.all(by.css('app-navigation-tab .flex-container button.flex-item')).get(number);
  }
  getTableHeading(){
    return element(by.css('h2.center')).getText();
  }
  getInputBoxValue(){
    return element(by.css('app-content-table div.input-box input')).getAttribute("value");
  }
  getElement(css_element:string){
    return element(by.css(css_element));
  }
}