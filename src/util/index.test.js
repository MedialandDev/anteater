import { queryString } from './';

describe('util index.js', () => {
  test('queryString', () => {
    const fakeLocation = {
      search: '?name=milkmidi&age=18&appid=9527',
    };
    expect(queryString('name', fakeLocation)).toBe('milkmidi');
    expect(queryString('age', fakeLocation)).toBe('18');
    expect(queryString('appid', fakeLocation)).toBe('9527');

    expect(queryString('other', fakeLocation)).toBeUndefined();
  });
});
