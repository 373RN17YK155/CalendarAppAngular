import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { MonthService } from '../services';
import { EventModalService } from '../services/event-modal.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  constructor(private evemtModalService: EventModalService, private monthService: MonthService) {}

  labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

  selectedDay$: Observable<Dayjs> | null = null;

  form: FormGroup = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    label: new FormControl(this.labelsClasses[0]),
  });

  get label() {
    return this.form.get("label")?.value as string;
  }

  set label(newValue: string | null) {
    this.form.get("label")?.setValue(newValue);
  }

  ngOnInit(): void {
    this.selectedDay$ = this.monthService.selectCurrentDay();
  }

  getColorClass = (color: string) => `bg-${color}-600`;

  handleClose() {
    this.evemtModalService.setModalVisibility(false);
  }

}
