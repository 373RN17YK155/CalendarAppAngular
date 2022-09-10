import { Component, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import { MonthService } from './services';
import { CalendarUtils } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private monthService: MonthService) {}

  currentMonth: Array<Array<Dayjs>> | null = null;

  ngOnInit() {
    this.monthService.selectIndex().subscribe(index => (this.currentMonth = CalendarUtils.getMonth(index)));
  }
}
