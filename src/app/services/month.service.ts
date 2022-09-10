import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  private _monthIndex = new BehaviorSubject<number>(dayjs().month());

  public getIndex = (): number => this._monthIndex.value;

  public selectIndex = (): Observable<number> => this._monthIndex;

  public setIndex = (index: number): void => this._monthIndex.next(index);
}
