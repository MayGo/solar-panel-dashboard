import { call, put, fork, cancelled } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  loadCloudCoverage,
  loadSolarActivity,
} from '../reducers/vizData/vizDataActions';

import * as withQuery from 'with-query';
import PlanetOsApi from '../../services/planetOsApi';

const delayMs = 8 * 60 * 1000;

function* bgSyncCloudCoverage() {
  while (true) {
    try {
      const data = yield call(
        PlanetOsApi.request,
        withQuery('bom_access-g_global_40km/point', {
          lon: '-50.5',
          lat: '49.5',
          var: 'av_ttl_cld',
          count: 50,
        }),
      );

      yield put(loadCloudCoverage(data.entries));

      console.log('Loaded CloudCoverage data:', data);
    } catch (err) {
      console.error('CloudCoverage data fetch error.', err);
    }
    yield call(delay, delayMs);
  }
}

function* bgSyncSolarActivity() {
  while (true) {
    try {
      const data = yield call(
        PlanetOsApi.request,
        withQuery('bom_access-g_global_40km/point', {
          lon: '-50.5',
          lat: '49.5',
          var: 'av_swsfcdown',
          count: 50,
        }),
      );

      yield put(loadCloudCoverage(data.entries));

      console.log('Loaded SolarActivity data:', data);
    } catch (err) {
      console.error('SolarActivity data fetch error.', err);
    }
    yield call(delay, delayMs);
  }
}

function* main() {
  // starts the task in the background
  yield fork(bgSyncCloudCoverage);
  yield fork(bgSyncSolarActivity);
}

// Bootstrap sagas
export default main;
