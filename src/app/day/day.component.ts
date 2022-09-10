import { Component, Input } from '@angular/core';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input() rowIndex!: number;

  @Input() day: Dayjs | null = null;

  get isCurrnetDay() {
    return this.day?.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  }
}
