import {renderHook} from '@testing-library/react-hooks';
import {useDashboard} from './useDashboard';

describe('useDashboard', () => {
  it('should initialize with correct initial state values', () => {
    const {result} = renderHook(() => useDashboard());

    expect(result.current.newMed).toEqual({
      id: '',
      name: '',
      dosage: '',
      time: [],
      frequency: '',
    });

    expect(result.current.medications).toEqual([]);
    expect(result.current.isUpdating).toBe(false);
  });

  it('should update newMed state when onChangeNewMed is called', () => {
    const {result} = renderHook(() => useDashboard());

    result.current.onChangeNewMed('name', 'Test Drug');
    expect(result.current.newMed.name).toBe('Test Drug');

    result.current.onChangeNewMed('dosage', '2 pills');
    expect(result.current.newMed.dosage).toBe('2 pills');
  });

  it('should add medication to medications array when handleAddMed is called', async () => {
    const {result} = renderHook(() => useDashboard());

    result.current.onChangeNewMed('name', 'Test Drug');
    result.current.onChangeNewMed('dosage', '2 pills');
    result.current.onChangeNewMed('frequency', '7');
    result.current.handleAddMed();

    expect(result.current.medications).toHaveLength(1);
    expect(result.current.medications[0].name).toBe('Test Drug');
    // You can add more assertions here
  });

  it('should delete medication from medications array when handleDeleteMedication is called', () => {
    const {result} = renderHook(() => useDashboard());

    const medication = {
      id: '123',
      name: 'Test Drug',
      dosage: '',
      time: [],
      frequency: '',
    };
    result.current.setMedications([medication]);
    result.current.handleDeleteMedication('123');

    expect(result.current.medications).toHaveLength(0);
  });

  it('should update medication in medications array when finalUpdate is called', () => {
    const {result} = renderHook(() => useDashboard());

    const medication = {
      id: '123',
      name: 'Test Drug',
      dosage: '',
      time: [],
      frequency: '',
    };
    result.current.setMedications([medication]);
    result.current.updateMedication({...medication, name: 'Updated Drug'});

    result.current.onChangeNewMed('name', 'New Name');
    result.current.finalUpdate();

    expect(result.current.medications[0].name).toBe('New Name');
  });

  // Add more test cases as needed
});
