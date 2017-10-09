import * as React from 'react';
import * as classNames from 'classnames';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { StyleRulesCallback } from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import IPvPanel from '../../@types/IPvPanel';

const styles: StyleRulesCallback = theme => ({
  panel: {
    width: 200,
    height: 70,
    padding: '10px !important',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: 10,
    transition: 'all .2s ease-in-out',
  },
  currentOutput: {
    alignItems: 'stretch',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  hoverEffect: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  voltage: {
    height: 23,
    padding: 3,
    fontSize: '1.5em',
  },
  wattage: {
    height: 23,
    padding: 3,
    fontSize: '1.5em',
  },
});

interface IHocProps {
  classes: {
    panel: string;
    currentOutput: string;
    hoverEffect: string;
    voltage: string;
    wattage: string;
  };
}

interface IProps {
  pvPanel: IPvPanel;
  className?: string;
  showSubtitle?: boolean;
  hoverEffect?: boolean;
}

const PvPanel = ({
  classes,
  className,
  pvPanel,
  showSubtitle = true,
  hoverEffect = true,
  ...rest,
}: IProps & IHocProps) => (
  <Paper
    className={classNames(
      classes.panel,
      { [classes.hoverEffect]: hoverEffect },
      className,
    )}
    elevation={15}
    {...rest}
  >
    <div className={classes.currentOutput}>
      <Typography className={classes.voltage} type="title">
        {pvPanel.voltage} V
      </Typography>
      <Typography className={classes.wattage} type="title">
        {pvPanel.wattage} W
      </Typography>
    </div>
    <Typography type="body2">{pvPanel.id}</Typography>
  </Paper>
);

export default withStyles(styles, { name: 'PvPanel' })<IProps>(PvPanel);
