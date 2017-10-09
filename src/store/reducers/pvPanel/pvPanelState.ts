import IPvPanel from '../../../@types/IPvPanel';
import IBaseReducer from '../IBaseReducer';
import IUnknownAction from '../IUnknownAction';
import IPvPanelState from './IPvPanelState';
import { PVPANEL__LOAD } from './pvPanelActions';

const pvPanel: IBaseReducer<IPvPanelState> = (
  state = { all: [] },
  action = IUnknownAction,
) => {
  switch (action.type) {
    case PVPANEL__LOAD:
      return handleAddAll(state, action.payload);
    default:
      return state;
  }
};

const handleAddAll = (
  state: IPvPanelState,
  payload: { pvPanels: IPvPanel[] },
): IPvPanelState => {
  return {
    ...state,
    all: payload.pvPanels,
  };
};

export default pvPanel;
