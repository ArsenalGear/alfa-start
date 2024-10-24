import { parse } from 'date-fns';

export const parsePeriodID = (id: string) => parse(id, 'yyyyMM', new Date());
