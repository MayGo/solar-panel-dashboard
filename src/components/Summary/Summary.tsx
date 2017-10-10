import * as React from 'react';

import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles: StyleRules = {
  pvPanelList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
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
  energy: {
    height: 23,
    padding: 3,
    fontSize: '1.5em',
  },
};

interface IHocProps {
  classes: {
    pvPanelList: string;
    panel: string;
    energy: string;
  };
}

interface IProps {
  className?: string;
  pvPanels: IPvPanel[];
}

type IFullProps = IProps & IHocProps;

const Summary = ({ classes, className, pvPanels }: IFullProps) => {
  const sum: number = pvPanels.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.wattage),
    0,
  );
  return (
    <div className={classNames(className, classes.pvPanelList)}>
      <Paper className={classNames(classes.panel, className)} elevation={15}>
        <Typography className={classes.energy} type="title">
          {sum / 1000} kW
        </Typography>
        <Typography type="body2">Total output</Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles, { name: 'Summary' })<IProps>(Summary);
