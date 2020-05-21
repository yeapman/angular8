import {countries} from './countries';

describe('countries', () => {
  it('nice contain countries codes', () => {
    const result = countries()

    expect(result).toContain('RU')
    expect(result).toContain('UA')
    expect(result).toContain('ENG')

  })
});
