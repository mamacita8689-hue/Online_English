import { unit01Hello } from './unit-01-hello';
import { unit02Family } from './unit-02-family';

export const courseUnits = [unit01Hello, unit02Family];

export function getUnitById(unitId: string) {
  return courseUnits.find((unit) => unit.id === unitId);
}
