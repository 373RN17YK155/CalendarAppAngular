import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { MonthService } from '../services';
import { EventModalService } from '../services/event-modal.service';
import { EventService, IEvent } from '../services/event.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  constructor(private evemtModalService: EventModalService, private monthService: MonthService, private eventService: EventService) {}

  labelsClasses = ["#1A237E", "#52525B", "#16A34A", "#2563EB", "#DC2626", "#9333EA"];

  selectedDay$: Observable<Dayjs> = this.monthService.selectCurrentDay();
  selectedEvent = this.eventService.getSelectedEvent();

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
    if (this.selectedEvent) {
      this.form.patchValue(this.selectedEvent);
    }
  }

  onClose() {
    if (this.selectedEvent) {
      this.eventService.setSelectedEvent(null);
    }
    this.evemtModalService.setModalVisibility(false);
  }

  handleClose() {
    this.onClose();
  }

  handleSubmit(form: FormGroup) {
    if (this.selectedEvent) {
      this.eventService.updateEvent({
        ...this.selectedEvent,
        ...form.getRawValue(),
      });
    } else {
      this.eventService.createEvent({
        uuid: uuidv4(),
        date: this.monthService.getCurrentDay(),
        ...form.getRawValue(),
      });
    }
    this.onClose();
  }

  handleDelete() {
    this.eventService.deleteEvent(this.selectedEvent!);
    this.onClose();
  }
}
