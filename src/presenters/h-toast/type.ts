import {ReactNode} from 'react';

export interface ToastContextValueProps {
  showToast: (type: typesProps, message: string) => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export type typesProps = 'error' | 'success' | 'info';
