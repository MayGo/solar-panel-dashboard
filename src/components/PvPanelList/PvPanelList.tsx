import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import PvPanel from '../PvPanel/PvPanel';
import { Grid } from 'material-ui';

const styles: StyleRules = {
  pvPanelList: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    height: 320,
    cursor: 'default',
    outline: 'none',
  },
};

interface IHocProps {
  classes: {
    pvPanelList: string;
    link: string;
  };
}

interface IProps {
  className?: string;
  pvPanels: IPvPanel[];
}

type IFullProps = IProps & IHocProps;

const PvPanelList = ({ classes, className, pvPanels }: IFullProps) => (
  <div className={classNames(className, classes.pvPanelList)}>
    <Grid container spacing={8}>
      {pvPanels.map((pvPanel, i) => (
        <Grid key={pvPanel.id} item xs={12} sm={6} md={3} lg={2}>
          <PvPanel pvPanel={pvPanel} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default withStyles(styles, { name: 'PvPanelList' })<IProps>(PvPanelList);
