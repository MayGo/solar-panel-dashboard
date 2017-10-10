import * as React from 'react';

import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles: StyleRules = {
  panel: {
    height: 70,
    padding: '10px !important',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    transition: 'all .2s ease-in-out',
  },
  energy: {
    height: 23,
    padding: 3,
    fontSize: '1.5em',
  },
};

interface IHocProps {
  classes: {
    panel: string;
    energy: string;
  };
}

interface IProps {
  pvPanels: IPvPanel[];
}

type IFullProps = IProps & IHocProps;

const Summary = ({ classes, pvPanels }: IFullProps) => {
  const sum: number = pvPanels.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.wattage),
    0,
  );
  return (
    <Paper className={classes.panel} elevation={1}>
      <Typography className={classes.energy} type="title">
        {sum / 1000} kW
      </Typography>
      <Typography type="body2">Total output</Typography>
    </Paper>
  );
};

export default withStyles(styles, { name: 'Summary' })<IProps>(Summary);
