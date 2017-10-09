import { combineReducers } from 'redux';

import pvPanel from './pvPanel/pvPanelState';

const rootReducer = combineReducers({
  pvPanel,
});

export default rootReducer;
