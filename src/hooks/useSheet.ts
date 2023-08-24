export const useSheet = (ref: any) => {
  const openSheet = () => ref?.current?.open();
  const closeSheet = () => ref?.current?.close();

  return {
    openSheet,
    closeSheet,
  };
};
