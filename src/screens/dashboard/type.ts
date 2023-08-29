import {KeyboardType} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';

export type DashboardTypes = GlobalScreenTypes & {};

export type inputType = {
  label: string;
  value: string;
  keyboardType?: KeyboardType;
  onChangeText: (text: string) => void;
};

export interface MedicationTime {
  id?: string;
  day: string;
  time: Date; // This should be a string representing the time, as JavaScript Date objects are not directly serializable in JSON
}

export interface MedicationReminder {
  id: string;
  dosage: string;
  frequency: string;
  name: string;
  time: MedicationTime[];
}
