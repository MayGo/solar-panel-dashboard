import IPvPanel from '../../../@types/IPvPanel';
import { returnPvOutputMock } from '../../../utils/testUtils';
import IPvPanelState from './IPvPanelState';
import pvPanel from './pvPanelState';
import { add, PVPANEL__LOAD } from './pvPanelActions';

const pvPanels = returnPvOutputMock();

describe('pvPanel reducer', () => {
  it('should return the default state when no state is passed', () => {
    const state = undefined;
    const action = undefined;
    const expected: IPvPanelState = returnInitialState();

    const actual = pvPanel(state, action);

    expect(actual).toEqual(expected);
  });

  it('should return the same state when an unknown action is passed', () => {
    const state = returnMockedState();
    const action = undefined;
    const expected = returnMockedState();

    const actual = pvPanel(state, action);

    expect(actual).toEqual(expected);
  });

  describe(PVPANEL__LOAD, () => {
    it('should add a pvPanel to the list', () => {
      const state = returnInitialState();
      const action = add(pvPanels[0]);
      const expected: IPvPanelState = {
        ...returnInitialState(),
        all: [pvPanels[0]],
      };

      const actual = pvPanel(state, action);

      expect(actual).toEqual(expected);
    });
  });
});

const returnMockedState = (): IPvPanelState => ({
  all: pvPanels,
});

const returnInitialState = (): IPvPanelState => ({
  all: [],
});
