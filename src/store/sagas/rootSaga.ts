import { fork } from 'redux-saga/effects';

import pvPanelSaga from './pvPanelSaga';
import vizDataSaga from './vizDataSaga';

const sagas = [pvPanelSaga, vizDataSaga];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}
