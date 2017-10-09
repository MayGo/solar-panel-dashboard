import IBaseAction from '../IBaseAction';
import IPvPanel from '../../../@types/IPvPanel';

export const PVPANEL__LOAD = 'PVPANEL/LOAD';

export const add = (pvPanels: IPvPanel): IBaseAction => ({
  type: PVPANEL__LOAD,
  payload: {
    pvPanels,
  },
});
