// @flow
export type DistrictData = {
  name: string,
  zip: string,
};
export type CountyData = {
  name: string,
  districts: Array<DistrictData>,
};
