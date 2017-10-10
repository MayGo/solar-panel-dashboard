import IBaseAction from '../IBaseAction';
import ICloudCoverage from '../../../@types/ICloudCoverage';
import ISolarActivity from '../../../@types/ISolarActivity';

export const CLOUD_COVERAGE__LOAD = 'CLOUD_COVERAGE/LOAD';
export const SOLAR_ACTIVITY__LOAD = 'SOLAR_ACTIVITY/LOAD';

export const loadCloudCoverage = (data: ICloudCoverage[]): IBaseAction => ({
  type: CLOUD_COVERAGE__LOAD,
  payload: {
    data,
  },
});

export const loadSolarActivity = (data: ISolarActivity[]): IBaseAction => ({
  type: SOLAR_ACTIVITY__LOAD,
  payload: {
    data,
  },
});
