import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { map, Observable } from 'rxjs';
import { MonthService } from '../services';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {

  constructor(private monthService: MonthService) { }

  currentMonthDate$: Observable<string> | null = null;

  ngOnInit(): void {
    this.currentMonthDate$ = this.monthService.selectIndex().pipe(map(index => dayjs(new Date(dayjs().year(), index)).format("MMMM YYYY")));
  }

  handlePrevMonth() {
    this.monthService.setIndex(this.monthService.getIndex() - 1);
  }

  handleNextMonth() {
    this.monthService.setIndex(this.monthService.getIndex() + 1);
  }

  handleReset() {
    this.monthService.setIndex(dayjs().month());
  }

}
