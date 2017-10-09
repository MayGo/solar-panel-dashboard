import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import IPvPanel from '../../@types/IPvPanel';
import PvPanel from '../PvPanel/PvPanel';

const styles: StyleRules = {
  pvPanelList: {
    display: 'flex',
    flexWrap: 'wrap',
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
    {pvPanels.map((pvPanel, i) => (
      <PvPanel key={pvPanel.regionName} pvPanel={pvPanel} />
    ))}
  </div>
);

export default withStyles(styles, { name: 'PvPanelList' })<IProps>(PvPanelList);
