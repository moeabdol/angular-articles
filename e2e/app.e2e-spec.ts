import { AngularArticlesPage } from './app.po';

describe('angular-articles App', () => {
  let page: AngularArticlesPage;

  beforeEach(() => {
    page = new AngularArticlesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
