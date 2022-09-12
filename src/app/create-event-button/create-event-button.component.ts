import { Component, OnInit } from '@angular/core';
import { EventModalService } from '../services/event-modal.service';

@Component({
  selector: 'app-create-event-button',
  templateUrl: './create-event-button.component.html',
  styleUrls: ['./create-event-button.component.scss']
})
export class CreateEventButtonComponent implements OnInit {

  constructor(private evemtModalService: EventModalService) { }

  ngOnInit(): void {
  }

  handleShowModal() {
    this.evemtModalService.setModalVisibility(true);
  }

}
