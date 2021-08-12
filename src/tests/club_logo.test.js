import clubLogo from '../club_logo';
import Essendon from '../../public/images/Essendon.svg';

describe('clubLogo function', () => {
  it('should display the appropriate team logo based on the club parameter', () => {
    expect(clubLogo('Essendon')).toEqual(Essendon);
  });
});
