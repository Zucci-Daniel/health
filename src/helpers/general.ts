import dayjs from 'dayjs';

export const convertToReadableTime = (time: any) => {
  var timestamp = new Date(time).getTime();
  var formatedTime = new Date(timestamp);
  return formatedTime.toLocaleTimeString('fr');
};

export const convertToTime = (date: any) => dayjs(date).format('h:mm A');
