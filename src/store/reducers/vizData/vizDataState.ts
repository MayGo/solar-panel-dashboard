import ICloudCoverage from '../../../@types/ICloudCoverage';
import ISolarActivity from '../../../@types/ISolarActivity';
import IBaseReducer from '../IBaseReducer';
import IUnknownAction from '../IUnknownAction';
import IVizDataState from './IVizDataState';
import { CLOUD_COVERAGE__LOAD, SOLAR_ACTIVITY__LOAD } from './vizDataActions';

const vizData: IBaseReducer<IVizDataState> = (
  state = { cloudCoverage: [], solarActivity: [] },
  action = IUnknownAction,
) => {
  switch (action.type) {
    case CLOUD_COVERAGE__LOAD:
      return handleAddCloudCoverage(state, action.payload);
    case SOLAR_ACTIVITY__LOAD:
      return handleAddSolarActivity(state, action.payload);
    default:
      return state;
  }
};

const handleAddCloudCoverage = (
  state: IVizDataState,
  payload: { data: ICloudCoverage[] },
): IVizDataState => {
  return {
    ...state,
    cloudCoverage: payload.data,
  };
};

const handleAddSolarActivity = (
  state: IVizDataState,
  payload: { data: ISolarActivity[] },
): IVizDataState => {
  return {
    ...state,
    solarActivity: payload.data,
  };
};

export default vizData;
