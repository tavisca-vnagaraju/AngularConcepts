import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title checkout', () => {
    page.navigateTo("/");
    expect(page.getTitleText()).toEqual('CheckOut');
  });
  
  it('should display table heading Checkout Details', () => {
    page.navigateTo("/");
    page.getButton(0).click();
    expect(page.getTableHeading()).toEqual('Checkout Details');
  });
  
  it('should display table heading Enablement Details', () => {
    page.navigateTo("/");
    page.getButton(1).click();
    expect(page.getTableHeading()).toEqual('Enablement Details');
  });
  
  it('should display table heading Flights Details', () => {
    page.navigateTo("/");
    page.getButton(2).click();
    expect(page.getTableHeading()).toEqual('Flights Details');
  });
  
  it('should display table heading Chai Details', () => {
    page.navigateTo("/");
    page.getButton(3).click();
    expect(page.getTableHeading()).toEqual('Chai Details');
  });
  
  it('should display input value as Checkout ', () => {
    page.navigateTo("/");
    page.getButton(0).click();
    expect(page.getInputBoxValue()).toEqual('Checkout');
  });
  
  it('should display input value as Enablement ', () => {
    page.navigateTo("/");
    page.getButton(1).click();
    expect(page.getInputBoxValue()).toEqual('Enablement');
  });
  
  it('should display input value as Flights ', () => {
    page.navigateTo("/");
    page.getButton(2).click();
    expect(page.getInputBoxValue()).toEqual('Flights');
  });
  
  it('should display input value as Chai ', () => {
    page.navigateTo("/");
    page.getButton(3).click();
    expect(page.getInputBoxValue()).toEqual('Chai');
  });
  
  it('should Navigate to contact page ', () => {
    page.navigateTo("/contact");
    expect(page.getElement("app-contact h1").getText()).toEqual('contact component is here!');
  });
  
  it('should Navigate to about page ', () => {
    page.navigateTo("/about/hello");
    expect(page.getElement("app-about h1").getText()).toEqual('About');
  });

  it('should display button value as typed in input ', () => {
    page.navigateTo("/");
    page.getButton(0).click();
    page.getElement('app-content-table div.input-box input').sendKeys("hey");
    expect(page.getButton(0).getText()).toEqual('Checkouthey');
  });
  
  it('should display table heading as typed in input ', () => {
    page.navigateTo("/");
    page.getButton(0).click();
    page.getElement('app-content-table div.input-box input').sendKeys("hey");
    expect(page.getTableHeading()).toEqual('Checkouthey Details');
  });

});
