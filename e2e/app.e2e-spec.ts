import { TransparencySubstancesPage } from './app.po';

describe('transparency-substances App', function() {
  let page: TransparencySubstancesPage;

  beforeEach(() => {
    page = new TransparencySubstancesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
