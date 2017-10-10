import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import IPvPanel from '../../@types/IPvPanel';
import Summary from '../../components/Summary/Summary';
import SolarActivityChart from '../../components/Forecast/SolarActivityChart';
import CloudCoverageChart from '../../components/Forecast/CloudCoverageChart';
import IStoreState from '../../store/IStoreState';
import IPvPanelState from '../../store/reducers/pvPanel/IPvPanelState';
import { Grid } from 'material-ui';
import IVizDataState from '../../store/reducers/vizData/IVizDataState';

interface IProps {
  className?: string;
}

interface IHocProps {
  pvPanel: IPvPanelState;
  vizData: IVizDataState;
}

type IFullProps = IProps & IHocProps;

const SummaryContainer = ({ className, pvPanel, vizData }: IFullProps) => {
  return (
    <div className={className}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4} md={4} lg={2}>
          <Summary pvPanels={pvPanel.all} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={5}>
          <SolarActivityChart solarActivity={vizData.solarActivity} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={5}>
          <CloudCoverageChart cloudCoverage={vizData.cloudCoverage} />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  { pvPanel: IPvPanelState; vizData: IVizDataState },
  IProps
> = (state: IStoreState, ownProps?: IProps) => ({
  pvPanel: state.pvPanel,
  vizData: state.vizData,
});

export default connect<any, any, IProps>(mapStateToProps, undefined)(
  SummaryContainer,
);
