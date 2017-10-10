import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import IPvPanel from '../../@types/IPvPanel';
import Summary from '../../components/Summary/Summary';
import Forecast from '../../components/Forecast/Forecast';
import IStoreState from '../../store/IStoreState';
import IPvPanelState from '../../store/reducers/pvPanel/IPvPanelState';
import { Grid } from 'material-ui';

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
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <Summary pvPanels={pvPanel.all} />
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={10}>
          <Forecast pvPanels={pvPanel.all} />
        </Grid>
      </Grid>
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
