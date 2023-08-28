import {useEffect, useState} from 'react';

export const usePeriod = (
  getTime: (day: string, time: any) => void,
  day: string,
  intialTime?: Date,
) => {
  const [time, setTime] = useState<Date | undefined>(intialTime);
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    time && getTime(day, time);
  }, [time]);

  return {
    time,
    showTime,
    setTime,
    setShowTime,
  };
};
