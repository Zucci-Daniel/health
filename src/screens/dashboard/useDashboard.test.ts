import {renderHook, act} from '@testing-library/react-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {useDashboard} from './useDashboard';

// Mock useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock @notifee/react-native
jest.mock('@notifee/react-native', () => ({
  __esModule: true,
  default: {
    ...jest.requireActual('@notifee/react-native').default,
    createChannel: jest.fn(),
    requestPermission: jest.fn(),
    createTriggerNotification: jest.fn(),
    cancelTriggerNotification: jest.fn(),
  },
}));

// describe('useDashboard', () => {
//   it('should set user and call setCurrentUser on mount', () => {
//     const dispatchMock = jest.fn();
//     const userState = {user: {name: 'Test User'}};

//     useDispatch.mockReturnValue(dispatchMock);
//     useSelector.mockReturnValue(userState);

//     const {result} = renderHook(() => useDashboard());

//     expect(result.current.user).toEqual(userState.user);
//     expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
//   });

//   // Add more tests for other functionality
// });
