import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import IPvPanel from '../../@types/IPvPanel';
import Summary from '../../components/Summary/Summary';
import Forecast from '../../components/Forecast/Forecast';
import IStoreState from '../../store/IStoreState';
import IPvPanelState from '../../store/reducers/pvPanel/IPvPanelState';

interface IProps {
  className?: string;
}

interface IHocProps {
  pvPanel: IPvPanelState;
}

type IFullProps = IProps & IHocProps;

const SummaryContainer = ({ className, pvPanel }: IFullProps) => {
  return (
    <div className={className}>
      <Summary pvPanels={pvPanel.all} />
      <Forecast pvPanels={pvPanel.all} />
    </div>
  );
};

const mapStateToProps: MapStateToProps<{ pvPanel: IPvPanelState }, IProps> = (
  state: IStoreState,
  ownProps?: IProps,
) => ({
  pvPanel: state.pvPanel,
});

export default connect<any, any, IProps>(mapStateToProps, undefined)(
  SummaryContainer,
);
