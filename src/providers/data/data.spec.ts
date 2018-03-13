import { DataProvider } from './data';
import {} from 'jasmine';

describe('DataProvider', () => {
  let dataProvider: DataProvider;
  let myItems: object[];

  beforeEach(() => {
    dataProvider = new DataProvider();
    myItems = dataProvider.getItems();
  });

  describe('getItems', () => {
    it('should return an array', () => {
      expect(Array.isArray(myItems)).toBeTruthy();
    });

    it('should contain 3 items', () => {
      expect(myItems.length).toBe(3);
    });
  });

  describe('addItem', () => {
    it('should add an item to myItems', () => {
      dataProvider.addItem({ title: 'Test', info: 'Test' });
      expect(myItems.length).toBe(4);
    });
  });
});