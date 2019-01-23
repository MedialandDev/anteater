import { type AreaType } from './types';
import CityAreaData from './CityAreaData.json';

export const getCities = (): string[] => Object.keys(CityAreaData);
export const getAreas = (countyName:string): AreaType[] => CityAreaData[countyName];

export default CityAreaData;
