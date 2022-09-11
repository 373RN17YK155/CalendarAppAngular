import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  private _monthIndex = new BehaviorSubject<number>(dayjs().month());

  private _selectedDay = new BehaviorSubject<Dayjs | null>(null)

  getIndex = (): number => this._monthIndex.value;

  getCurrentDay = () => this._selectedDay.value;

  selectIndex = (): Observable<number> => this._monthIndex;

  setSelectedDay = (day: Dayjs) => this._selectedDay.next(day);

  setIndex = (index: number): void => this._monthIndex.next(index);
}
