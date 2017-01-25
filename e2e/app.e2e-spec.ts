import { CampusRecruitmentPage } from './app.po';

describe('campus-recruitment App', function() {
  let page: CampusRecruitmentPage;

  beforeEach(() => {
    page = new CampusRecruitmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
