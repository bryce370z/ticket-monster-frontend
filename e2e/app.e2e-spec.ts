import { TicketMonsterFrontendPage } from './app.po';

describe('ticket-monster-frontend App', function() {
  let page: TicketMonsterFrontendPage;

  beforeEach(() => {
    page = new TicketMonsterFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
