import { InfiniteScrollPage } from './app.po';

describe('infinite-scroll App', () => {
  let page: InfiniteScrollPage;

  beforeEach(() => {
    page = new InfiniteScrollPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to is!');
  });
});
