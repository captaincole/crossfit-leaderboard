import { CrossfitLeaderboardPage } from './app.po';

describe('crossfit-leaderboard App', function() {
  let page: CrossfitLeaderboardPage;

  beforeEach(() => {
    page = new CrossfitLeaderboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
