import IBaseAction from '../IBaseAction';
import IPvPanel from '../../../@types/IPvPanel';

export const PVPANEL__LOAD = 'PVPANEL/LOAD';

export const loadPvPanels = (pvPanels: IPvPanel[]): IBaseAction => ({
  type: PVPANEL__LOAD,
  payload: {
    pvPanels,
  },
});
