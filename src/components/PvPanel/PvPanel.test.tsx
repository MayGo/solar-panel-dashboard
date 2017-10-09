import * as React from 'react';
import { createMount, createShallow } from 'material-ui/test-utils';
import { transformConsoleMessagesToExceptions } from '../../utils/testUtils';
import { returnPvOutputMock } from '../../utils/testUtils';
import PvPanel from './PvPanel';

describe('<PvPanel />', () => {
  beforeEach(() => transformConsoleMessagesToExceptions());

  const mount = createMount();
  const shallow = createShallow();

  it('should render without crashing', () => {
    mount(<PvPanel pvPanel={returnPvOutputMock()[0]} />);
    mount(<PvPanel pvPanel={returnPvOutputMock()[0]} />);
    mount(<PvPanel pvPanel={returnPvOutputMock()[0]} />);
  });

  it('should place a class inside the component', () => {
    const wrapper = shallow(
      <PvPanel pvPanel={returnPvOutputMock()[0]} className="test" />,
    );
    expect(wrapper.first().hasClass('test')).toBeTruthy();
  });
});
