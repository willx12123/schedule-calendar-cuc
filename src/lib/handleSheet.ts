import { handleClasses } from '@/lib/handleClasses';
import { Cell } from '@/interfaces/cell';

export const handleSheet = (sheets: {
  [keys: string]: {
    [keys: string]: Cell;
  };
}) => {
  const firstSheet = sheets[Object.keys(sheets)[0]] as { [key: string]: Cell };
  return handleClasses(firstSheet);
};
