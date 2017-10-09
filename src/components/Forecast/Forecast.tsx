import * as React from 'react';

import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import Paper from 'material-ui/Paper';

import { LineChart, Line } from 'recharts';

const styles: StyleRules = {
  forecast: {
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

const Forecast = ({ classes, className, pvPanels }: IFullProps) => {
  const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
  ];

  return (
    <div className={classNames(className, classes.forecast)}>
      <Paper className={classNames(classes.panel, className)} elevation={15}>
        <LineChart width={100} height={100} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </Paper>
    </div>
  );
};

export default withStyles(styles, { name: 'Forecast' })<IProps>(Forecast);
