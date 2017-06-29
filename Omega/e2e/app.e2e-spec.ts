import { OmegaPage } from './app.po';

describe('omega App', () => {
  let page: OmegaPage;

  beforeEach(() => {
    page = new OmegaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
