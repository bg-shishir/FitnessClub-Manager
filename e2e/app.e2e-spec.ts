import { CS2AngularFirePage } from './app.po';

describe('cs2-angular-fire App', () => {
  let page: CS2AngularFirePage;

  beforeEach(() => {
    page = new CS2AngularFirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
