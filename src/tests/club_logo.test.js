import clubLogo from '../club_logo';

describe('clubLogo function', () => {
  it('should return string URL to club logo svg', () => {
    expect(clubLogo('Essendon')).toEqual('../public/images/Essendon.svg');
  });
});
