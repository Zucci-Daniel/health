import {useSelector} from 'react-redux';
import { RootState } from '../redux/store';


export const useColors = () => {
  const {colors} = useSelector((state: RootState) => state.themeReducer);
  return colors
};
