import { ACEPage } from './app.po';

describe('ace App', () => {
  let page: ACEPage;

  beforeEach(() => {
    page = new ACEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
