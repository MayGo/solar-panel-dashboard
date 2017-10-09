import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import PvPanelList from '../../components/PvPanelList/PvPanelList';
import IStoreState from '../../store/IStoreState';
import IPvPanelState from '../../store/reducers/pvPanel/IPvPanelState';

interface IProps {
  className?: string;
}

interface IHocProps {
  pvPanel: IPvPanelState;
}

type IFullProps = IProps & IHocProps;

const PvPanelListContainer = ({ className, pvPanel }: IFullProps) => {
  return <PvPanelList className={className} pvPanels={pvPanel.all} />;
};

const mapStateToProps: MapStateToProps<{ pvPanel: IPvPanelState }, IProps> = (
  state: IStoreState,
  ownProps?: IProps,
) => ({
  pvPanel: state.pvPanel,
});

export default connect<any, any, IProps>(mapStateToProps, undefined)(
  PvPanelListContainer,
);
