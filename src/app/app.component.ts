import { Component, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import { map, Observable } from 'rxjs';
import { MonthService } from './services';
import { EventModalService } from './services/event-modal.service';
import { CalendarUtils } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private monthService: MonthService, private evemtModalService: EventModalService) {}

  currentMonth$: Observable<Array<Array<Dayjs>>> | null = null;

  modalVisibility$: Observable<boolean> | null = null;

  ngOnInit() {
    this.currentMonth$ = this.monthService.selectIndex().pipe(map(index => CalendarUtils.getMonth(index)));
    this.modalVisibility$ = this.evemtModalService.selectModalVisibility();
  }
}
