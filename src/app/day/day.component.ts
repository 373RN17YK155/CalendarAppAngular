import { Component, Input, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';
import { EventModalService } from '../services/event-modal.service';
import { MonthService } from '../services';
import { EventService, IEvent } from '../services/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  constructor(private modalService: EventModalService, private monthService: MonthService, private eventSerivce: EventService) {}

  @Input() rowIndex!: number;

  @Input() day: Dayjs | null = null;

  dayEvents$: Observable<Array<IEvent>> | null = null;

  get isCurrnetDay() {
    return this.day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  }

  ngOnInit() {
    this.dayEvents$ = this.eventSerivce.selectEventsByDate(this.day!);
  }

  handleAddEvent(day: Dayjs) {
    this.modalService.setModalVisibility(true);
    this.monthService.setSelectedDay(day);
  }

  handleSetSelectedEvent(event: IEvent) {
    this.eventSerivce.setSelectedEvent(event);
  }
}
