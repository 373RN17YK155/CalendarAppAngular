import * as dayjs from "dayjs";

export const CalendarUtils = {
  getMonth: (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 0)).day();
    let currentMonthDay = 0 - firstDayOfMonth;
    return new Array(5).fill([]).map(() => new Array(7).fill(null).map(() => dayjs(new Date(year, month, ++currentMonthDay))))
  }
}
