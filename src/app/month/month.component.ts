import { Component, Input } from '@angular/core';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {
  @Input() month!: Array<Array<Dayjs>> | null;
}
