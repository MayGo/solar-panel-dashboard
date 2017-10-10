import { combineReducers } from 'redux';

import pvPanel from './pvPanel/pvPanelState';
import vizData from './vizData/vizDataState';

const rootReducer = combineReducers({
  pvPanel,
  vizData,
});

export default rootReducer;
