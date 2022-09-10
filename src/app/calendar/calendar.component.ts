import { Component, Input } from '@angular/core';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() month!: Array<Array<Dayjs>> | null;
}
