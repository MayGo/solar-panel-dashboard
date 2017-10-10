import * as React from 'react';

import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import { StyleRulesCallback } from 'material-ui/styles/withStyles';
import { injectIntl } from 'react-intl';
import * as ReactIntl from 'react-intl';
import { compose } from 'recompose';
import PvPanelListContainer from '../../containers/PvPanelListContainer/PvPanelListContainer';
import SummaryContainer from '../../containers/SummaryContainer/SummaryContainer';
import { Typography, Toolbar } from 'material-ui';

const styles: StyleRulesCallback = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.contentFrame,
  },
  logo: {
    fontWeight: 200,
    letterSpacing: 1,
    flex: 1,
  },
  summary: {
    display: 'flex',
  },
  grid: {
    padding: 10,
  },
  toolbar: {
    minHeight: 48,
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
    logo: string;
    grid: string;
    summary: string;
    toolbar: string;
  };
  intl: ReactIntl.InjectedIntl;
}

type IFullProps = IProps & IHocProps;

const Home = ({ classes, intl }: IFullProps) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography type="title" color="inherit" className={classes.logo}>
          Solar Panel Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    <SummaryContainer className={classes.grid} />
    <PvPanelListContainer className={classes.grid} />
  </div>
);

export default compose<IFullProps, IProps>(
  injectIntl,
  withStyles(styles, { name: 'Home' }),
)(Home);
