import {useEffect, useState} from 'react';

export const usePeriod = (
  getTime: (day: string, time: any) => void,
  day: string,
) => {
  const [time, setTime] = useState<any>();
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
