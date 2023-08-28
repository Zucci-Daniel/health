import {useEffect, useState} from 'react';

export const usePeriod = (
  getTime: (day: string, time: any) => void,
  day: string,
  initialTime?: Date,
) => {
  const [time, setTime] = useState<Date | undefined>(initialTime);
  const [showTime, setShowTime] = useState(false);
  console.log('THE INITIAL TIME IS =>', initialTime, time);

  useEffect(() => {
    if (initialTime) {
      setTime(initialTime);
    }
  }, [initialTime]);

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
