import * as React from 'react';
import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { createMount, createShallow } from 'material-ui/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { transformConsoleMessagesToExceptions } from '../../utils/testUtils';
import { returnPvOutputMock } from '../../utils/testUtils';
import PvPanel from '../PvPanel/PvPanel';
import PvPanelList from './PvPanelList';

describe('COMPONENT: <PvPanelList />', () => {
  beforeEach(() => transformConsoleMessagesToExceptions());

  const mount = createMount();
  const shallow = createShallow();
  let wrapperMount: ReactWrapper<any, any>;
  let wrapperShallow: ShallowWrapper<any, any>;
  const pvPanels = returnPvOutputMock();

  it('should render without crashing', () => {
    const component = (
      <BrowserRouter>
        <PvPanelList pvPanels={pvPanels} />
      </BrowserRouter>
    );
    wrapperMount = mount(component);
    wrapperShallow = shallow(component);
  });

  it('should render a PvPanel component for each pvPanel passed', () => {
    expect(
      wrapperShallow
        .dive()
        .dive()
        .find(PvPanel).length,
    ).toBe(pvPanels.length);
  });
});
