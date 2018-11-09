import CityAreaData, { getCities, getAreas } from '.';

describe('CityArea', () => {
  test('CityAreaData', () => {
    expect(Object.keys(CityAreaData).length).toBe(22);
  });
  test('共22個縣市', () => {
    expect(getCities().length).toBe(22);
  });
  test('getAreas', () => {
    expect(getAreas('臺北市').length).toBe(12);
  });
});
