import { RecargaCelPage } from './app.po';

describe('recarga-cel App', function() {
  let page: RecargaCelPage;

  beforeEach(() => {
    page = new RecargaCelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
