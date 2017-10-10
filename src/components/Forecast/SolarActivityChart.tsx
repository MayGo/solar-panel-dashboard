import * as React from 'react';

import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import * as moment from 'moment';

import {
  Tooltip,
  Line,
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  LineChart,
} from 'recharts';
import ISolarActivity from '../../@types/ISolarActivity';

const styles: StyleRulesCallback = theme => ({
  panel: {
    height: 90,
    padding: '0px !important',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    transition: 'all .2s ease-in-out',
  },
  label: {
    color: theme.palette.text.primary,
  },
});

interface IHocProps {
  classes: {
    panel: string;
    label: string;
  };
}

interface IProps {
  solarActivity: ISolarActivity[];
}

type IFullProps = IProps & IHocProps;

const SolarActivityChart = ({ classes, solarActivity }: IFullProps) => {
  const now = moment();
  const nowPlus24hours = moment().add(24, 'hours');

  const data = solarActivity
    .filter(item => moment(item.axes.time).isBetween(now, nowPlus24hours))
    .map((item: ISolarActivity) => ({
      name: moment(item.axes.time).format('HH:mm'),
      kW: Math.floor(item.data.av_swsfcdown),
    }));

  return (
    <Paper className={classes.panel} elevation={1}>
      <div className={classes.label}>Solar activity</div>
      <ResponsiveContainer>
        <LineChart height={90} data={data}>
          <Tooltip />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="kW" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default withStyles(styles, { name: 'SolarActivityChart' })<IProps>(
  SolarActivityChart,
);
