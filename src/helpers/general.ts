import dayjs from 'dayjs';
import uuid from 'react-native-uuid';

export const convertToReadableTime = (time: any) => {
  var timestamp = new Date(time).getTime();
  var formattedTime = new Date(timestamp);
  return formattedTime.toLocaleTimeString('en-US', {timeStyle: 'long'});
};

export const convertToTime = (date: any) => dayjs(date).format('h:mm A');

export const generateUniqueId = () => uuid.v4();

export const convertToTimeAndDate = (date: any) =>
  dayjs(date).format('ddd MMM YYYY, h:mm A');
