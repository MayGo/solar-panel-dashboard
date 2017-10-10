import IPvPanelState from './reducers/pvPanel/IPvPanelState';
import IVizDataState from './reducers/vizData/IVizDataState';

export default interface IStoreState {
  pvPanel: IPvPanelState;
  vizData: IVizDataState;
};
