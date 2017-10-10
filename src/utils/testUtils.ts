import IPvPanel from '../@types/IPvPanel';
import ISolarActivity from '../@types/ISolarActivity';

const pvPanelNames = [
  'A1B',
  'V2S',
  'B3N',
  'V4S',
  'R5S',
  'U6Y',
  'D7R',
  'D8R',
  'D9R',
  'D10R',
  'G11B',
  'R12S',
  'Q13N',
  'A9S',
  'B9S',
  'L0C',
  'E1D',
  'E2E',
  'E3F',
  'E4G',
  'N1H',
  'L3I',
  'C3J',
  'P9K',
  'A9L',
  'P0M',
  'V1N',
  'V2O',
  'V3P',
  'V4Q',
];
export const returnPvOutputMock = (): IPvPanel[] => {
  const items: IPvPanel[] = [];
  pvPanelNames.forEach(id => {
    const item: IPvPanel = {
      id,
      voltage: getRandomArbitrary(200, 250),
      wattage: getRandomArbitrary(20, 800),
    };
    items.push(item);
  });

  return items;
};

export const returnMockData = (): ISolarActivity[] => [
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.00002765655517578125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 44.0872802734375,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T15:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 425.7227783203125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T18:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 428.4930419921875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-10T21:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 64.3548583984375,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 35.578857421875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T15:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 239.461181640625,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T18:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 370.6800537109375,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-11T21:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 91.21923828125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 58.1102294921875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T15:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 212.45166015625,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T18:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 352.43408203125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-12T21:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 97.4869384765625,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 76.2589111328125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T15:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 363.074462890625,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T18:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 359.888427734375,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-13T21:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 66.7225341796875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 73.4620361328125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T15:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 223.1170654296875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T18:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 199.1827392578125,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-14T21:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 67.15576171875,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-15T00:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-15T03:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-15T06:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-15T09:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 0.0,
    },
  },
  {
    context: 'reference_time_time_lat_lon',
    classifiers: {
      reference_time: '2017-10-10T00:00:00.000Z',
    },
    axes: {
      reftime: '2017-10-10T00:00:00',
      time: '2017-10-15T12:00:00',
      latitude: 49.453125,
      longitude: -50.625,
    },
    data: {
      av_swsfcdown: 26.504638671875,
    },
  },
];

const getRandomArbitrary = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const transformConsoleMessagesToExceptions = () => {
  console.warn = jest.fn(warn => {
    throw new Error(warn);
  });
  console.error = jest.fn(error => {
    throw new Error(error);
  });
};
