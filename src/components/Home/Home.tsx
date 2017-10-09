import * as React from 'react';

import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { StyleRulesCallback } from 'material-ui/styles/withStyles';
import { injectIntl } from 'react-intl';
import * as ReactIntl from 'react-intl';
import { compose } from 'recompose';
import PvPanelListContainer from '../../containers/PvPanelListContainer/PvPanelListContainer';
import SummaryContainer from '../../containers/SummaryContainer/SummaryContainer';

const styles: StyleRulesCallback = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  summary: {
    display: 'flex',
  },
  pvPanelList: {
    padding: 10,
    height: 'calc(100vh - 68px)',
    overflow: 'auto',
  },
});

interface IProps {
  handleTabChange: (evt: any, index: number) => void;
  selectedTabIndex: number;
  changeRouteAdd: () => void;
}

interface IHocProps {
  classes: {
    root: string;
    pvPanelList: string;
    summary: string;
  };
  intl: ReactIntl.InjectedIntl;
}

type IFullProps = IProps & IHocProps;

const Home = ({ classes, intl }: IFullProps) => (
  <div className={classes.root}>
    <AppBar position="static">
      <SummaryContainer className={classes.summary} />
    </AppBar>

    <PvPanelListContainer className={classes.pvPanelList} />
  </div>
);

export default compose<IFullProps, IProps>(
  injectIntl,
  withStyles(styles, { name: 'Home' }),
)(Home);
