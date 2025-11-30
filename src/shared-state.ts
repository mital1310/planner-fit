import { PlannerDay, DAYS } from './models';

export const plannerState = {
  days: [...DAYS] as PlannerDay[],
  
  setDays(days: PlannerDay[]) {
    this.days = days;
  },
  
  getDays(): PlannerDay[] {
    return this.days;
  },
  
  getExercisesForDay(dayId: string) {
    const day = this.days.find((d) => d.id === dayId);
    return day?.exercises || [];
  },
};
