
import CountyDistrictData, { getCounties } from '../';

describe('util', () => {
  test('CountyDistrictData', () => {
    expect(CountyDistrictData.length).toBe(22);
  });
  test('getCounties', () => {
    expect(getCounties().length).toBe(22);
  });
});
