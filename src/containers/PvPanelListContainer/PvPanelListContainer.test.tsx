import * as React from 'react';
import { createMount, createShallow } from 'material-ui/test-utils';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import IStoreState from '../../store/IStoreState';
import configureStore from '../../store/store';
import {
  returnPvOutputMock,
  transformConsoleMessagesToExceptions,
} from '../../utils/testUtils';
import PvPanelListContainer from './PvPanelListContainer';

describe('COMPONENT: <PvPanelListContainer />', () => {
  beforeEach(() => transformConsoleMessagesToExceptions());

  const mount = createMount();
  const shallow = createShallow();

  it('should render without crashing', () => {
    const initialState: IStoreState = {
      pvPanel: {
        all: returnPvOutputMock(),
      },
    };
    const store = configureStore(initialState);
    const component = (
      <AppWrapper store={store} locale="en">
        <PvPanelListContainer />
      </AppWrapper>
    );
    mount(component);
    shallow(component);
  });
});
