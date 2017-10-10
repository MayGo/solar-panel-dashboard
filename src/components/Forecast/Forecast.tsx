import * as React from 'react';

import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import Paper from 'material-ui/Paper';

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
} from 'recharts';

const styles: StyleRules = {
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
  energy: {
    height: 23,
    padding: 3,
    fontSize: '1.5em',
  },
};

interface IHocProps {
  classes: {
    forecast: string;
    panel: string;
    energy: string;
  };
}

interface IProps {
  pvPanels: IPvPanel[];
}

type IFullProps = IProps & IHocProps;

const Forecast = ({ classes, pvPanels }: IFullProps) => {
  const data = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
    { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
  ];

  return (
    <Paper className={classes.panel} elevation={1}>
      <ResponsiveContainer>
        <ComposedChart width={600} height={90} data={data}>
          <Tooltip />

          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default withStyles(styles, { name: 'Forecast' })<IProps>(Forecast);
