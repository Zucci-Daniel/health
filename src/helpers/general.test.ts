import uuid from 'react-native-uuid';
import {convertToTime, generateUniqueId} from './general';

jest.mock('react-native-uuid', () => ({
  v4: jest.fn(() => 'mock-uuid'),
}));

describe('Utility Functions', () => {
  //----PASSED----
  describe('convertToTime', () => {
    it('converts date to time format', () => {
      const date = '2023-08-28T15:45:00';
      const expected = '3:45 PM';
      expect(convertToTime(date)).toEqual(expected);
    });
  });
  describe('generateUniqueId', () => {
    it('generates a unique ID using react-native-uuid', () => {
      const uniqueId = generateUniqueId();
      expect(uniqueId).toEqual('mock-uuid');
      expect(uuid.v4).toHaveBeenCalled();
    });
  });
  //----PASSED----
});
