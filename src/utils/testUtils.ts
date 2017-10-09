import IPvPanel from '../@types/IPvPanel';

export const returnPvOutputMock = (): IPvPanel[] => {
  const items: IPvPanel[] = [];
  const item: IPvPanel = {
    id: 'A12',
    voltage: 123,
    wattage: 43355,
  };
  items.push(item);
  return items;
};

export const transformConsoleMessagesToExceptions = () => {
  console.warn = jest.fn(warn => {
    throw new Error(warn);
  });
  console.error = jest.fn(error => {
    throw new Error(error);
  });
};
