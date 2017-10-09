import IPvPanel from '../@types/IPvPanel';

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
      voltage: getRandomArbitrary(50, 400),
      wattage: getRandomArbitrary(10000, 50000),
    };
    items.push(item);
  });

  return items;
};

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
