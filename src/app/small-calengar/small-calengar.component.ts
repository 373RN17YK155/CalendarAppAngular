import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { MonthService } from '../services';
import { CalendarUtils } from '../utils';

@Component({
  selector: 'app-small-calengar',
  templateUrl: './small-calengar.component.html',
  styleUrls: ['./small-calengar.component.scss']
})
export class SmallCalengarComponent implements OnInit, OnDestroy {

  constructor(private monthSerivce: MonthService) { }

  currentMonthIdx$ = new BehaviorSubject<number>(dayjs().month());
  currentMonth$: Observable<Array<Array<Dayjs>>> | null = null;
  currentMonthDate$: Observable<string> | null = null;

  subscridtion$: Subscription | null = null;

  ngOnInit(): void {
    this.subscridtion$ = this.monthSerivce.selectIndex().subscribe(monthIdx => this.currentMonthIdx$.next(monthIdx));
    this.currentMonthDate$ = this.currentMonthIdx$.pipe(map(index => dayjs(new Date(dayjs().year(), index)).format("MMMM YYYY")));
    this.currentMonth$ = this.currentMonthIdx$.pipe(map(index => CalendarUtils.getMonth(index)));
  }

  ngOnDestroy(): void {
    this.subscridtion$?.unsubscribe();
  }

  getDayClass = (day: Dayjs): string => {
    const format = "DD-MM-YY";
    if (day.format(format) === dayjs().format(format)) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (day.format(format) === this.monthSerivce.getCurrentDay()?.format(format)) {
      return 'bg-blue-100 rounded-full text-blue-600';
    } else if (day.month() !== this.monthSerivce.getIndex()) {
      return 'text-gray-500';
    }
    return '';
  }

  handlePrevMonth = () => this.currentMonthIdx$.next(this.currentMonthIdx$.value - 1);

  handleNextMonth = () => this.currentMonthIdx$.next(this.currentMonthIdx$.value + 1);

  handleDayClick = (day: Dayjs) => {
    this.monthSerivce.setIndex(day.month());
    this.monthSerivce.setSelectedDay(day);
  };

}
