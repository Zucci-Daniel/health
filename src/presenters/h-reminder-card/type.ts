import {MedicationTime} from '../../screens/dashboard/type';

export type HreminderCardType = {
  name: string;
  frequency: string;
  dosage: string;
  time: Array<MedicationTime>;
};
