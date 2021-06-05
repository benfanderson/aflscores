import createTitle from '../create_title';

describe('createTitle function', () => {
  it('should return "Round #" when user passes a number', () => {
    expect(createTitle(1)).toEqual('Round 1');
  });

  it('should return club name when user passes a string', () => {
    expect(createTitle('Essendon')).toEqual('Essendon');
  });
});
