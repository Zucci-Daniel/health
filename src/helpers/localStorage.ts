import AsyncStorage from '@react-native-async-storage/async-storage';
import {logThis} from './Log';

export const storeItem = async (nameOfItem: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(nameOfItem, jsonValue);
  } catch (error: any) {
    logThis('error storing item', error?.message);
  }
};

export const getItem = async (
  nameOfItem: string,
  shouldConvertToObject = false,
) => {
  try {
    const response: any = await AsyncStorage.getItem(nameOfItem);

    if (shouldConvertToObject) {
      return JSON.parse(response);
    } else {
      return response;
    }
  } catch (error: any) {
    logThis(error.message, ' failed to get item');
  }
};

export const updateItem = async (key: any, data: any) => {
  await AsyncStorage?.mergeItem(key, JSON.stringify(data));
};

export function removeItem(key: any) {
  // return AsyncStorage.removeItem(key);
  return new Promise(resolve => {
    AsyncStorage.removeItem(key).then((data: any) => {
      resolve(data);
    });
  });
}
