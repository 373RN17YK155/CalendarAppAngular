import { Component, Input } from '@angular/core';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';
import { EventModalService } from '../services/event-modal.service';
import { MonthService } from '../services';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  constructor(private modalService: EventModalService, private monthService: MonthService) {}

  @Input() rowIndex!: number;

  @Input() day: Dayjs | null = null;

  get isCurrnetDay() {
    return this.day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  }

  handleAddEvent(day: Dayjs) {
    this.modalService.setModalVisibility(true);
    this.monthService.setSelectedDay(day);
  }
}
