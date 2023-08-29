import {MedicationTime} from '../../screens/dashboard/type';

export type HreminderCardType = {
  name: string;
  frequency: number;
  dosage: string;
  time: Array<MedicationTime>;
  onDelete?: () => void;
  onUpdate?: () => void;
};
