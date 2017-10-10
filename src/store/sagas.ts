import { fork } from 'redux-saga/effects';

import pvPanelSaga from './pvPanelSaga';

const sagas = [pvPanelSaga];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}
