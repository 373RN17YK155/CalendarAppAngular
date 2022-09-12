import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventModalService {
  private _eventModalVisibility = new BehaviorSubject<boolean>(false);

  selectModalVisibility = () => this._eventModalVisibility;

  setModalVisibility = (flag: boolean) => this._eventModalVisibility.next(flag);
}
