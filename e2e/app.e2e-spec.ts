import { FnbSpAppPage } from './app.po';

describe('fnb-sp-app App', () => {
  let page: FnbSpAppPage;

  beforeEach(() => {
    page = new FnbSpAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
