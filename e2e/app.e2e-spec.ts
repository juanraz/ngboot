import { JRaChatPage } from './app.po';

describe('jra-chat App', () => {
  let page: JRaChatPage;

  beforeEach(() => {
    page = new JRaChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
