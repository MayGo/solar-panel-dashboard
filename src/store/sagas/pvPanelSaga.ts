import { call, put, fork, cancelled } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { loadPvPanels } from '../reducers/pvPanel/pvPanelActions';
import { returnPvOutputMock } from '../../utils/testUtils';

function* bgSync() {
  const delayMs = 10000;
  try {
    while (true) {
      yield call(delay, delayMs);

      const pvPanels = returnPvOutputMock();
      yield put(loadPvPanels(pvPanels));

      console.log('Loaded pvPanels:', pvPanels);
    }
  } catch (err) {
    if (yield cancelled()) {
      console.info(' Sync canceled.');
    }
  }
}

function* main() {
  // starts the task in the background
  yield fork(bgSync);
}

// Bootstrap sagas
export default main;
