import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {logThis} from '../helpers';
import {storeReducer} from './global-store/storeSlice';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['redux-persist']);
const reducers = combineReducers({
  storeReducer,
});

const persistConfig: any = {
  key: 'root',
  storage,
  serialize: (data: any) => {
    return JSON.stringify({
      ...data,
      socket: null,
    });
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const resetStore = () => {
  const rootState = store.getState();
  const resetAction = {type: 'RESET_STORE'};
  Object.keys(rootState).forEach(key => {
    store.dispatch({...resetAction, meta: {key}});
  });
  logThis('store resetted!');
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
