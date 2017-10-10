import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import * as moment from 'moment';

import {
  Tooltip,
  Line,
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  LineChart,
} from 'recharts';
import ICloudCoverage from '../../@types/ICloudCoverage';

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
  cloudCoverage: ICloudCoverage[];
}

type IFullProps = IProps & IHocProps;

const CloudCoverageChart = ({ classes, cloudCoverage }: IFullProps) => {
  const now = moment();
  const nowPlus24hours = moment().add(24, 'hours');

  const data = cloudCoverage
    .filter(item => moment(item.axes.time).isBetween(now, nowPlus24hours))
    .map((item: ICloudCoverage) => ({
      name: moment(item.axes.time).format('HH:mm'),
      Coverage: Math.floor(item.data.av_ttl_cld * 100),
    }));

  return (
    <Paper className={classes.panel} elevation={1}>
      <div className={classes.label}>Cloud coverage</div>
      <ResponsiveContainer>
        <LineChart height={100} data={data}>
          <Tooltip />
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey="Coverage" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default withStyles(styles, { name: 'CloudCoverageChart' })<IProps>(
  CloudCoverageChart,
);
