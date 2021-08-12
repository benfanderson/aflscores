import clubLogo from '../club_logo';

describe('clubLogo function', () => {
  it('should display the appropriate team logo based on the club parameter', () => {
    expect(clubLogo('Essendon')).toBe('../public/images/Essendon.svg');
  });
});
