import ICloudCoverage from '../../../@types/ICloudCoverage';
import ISolarActivity from '../../../@types/ISolarActivity';

export default interface IVizDataState {
  cloudCoverage: ICloudCoverage[];
  solarActivity: ISolarActivity[];
};
