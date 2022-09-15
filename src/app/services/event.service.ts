import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface IEvent {
  uuid: string;
  title: string;
  date: Dayjs;
  description: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {
    this._events = new BehaviorSubject(localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events')!)
      : []);
  }

  private _events: BehaviorSubject<Array<IEvent>>;

  private _selectedEvent = new BehaviorSubject<IEvent | null>(null);

  public getEvents = (): Array<IEvent> => this._events.value;

  public selectEvents = (): Observable<Array<IEvent>> => this._events;

  public setSelectedEvent = (value: IEvent | null) => this._selectedEvent.next(value);

  public createEvent = (event: IEvent): void => {
    this._events.next([...this._events.value, event]);
    localStorage.setItem('events', JSON.stringify(this._events.value));
  }

  public updateEvent = (event: IEvent): void => {
    this._events.next(this._events.value.map(item => item.uuid !== event.uuid ? item : event));
    localStorage.setItem('events', JSON.stringify(this._events.value));
  }

  public getEventsByDate = (date: Dayjs): Array<IEvent> =>
    this._events.value.filter(item => dayjs(item.date).format('DD-MM-YY') === date.format('DD-MM-YY'));

  public selectEventsByDate = (date: Dayjs): Observable<Array<IEvent>> =>
    this._events.pipe(map(events => events.filter(item => dayjs(item.date).format('DD-MM-YY') === date.format('DD-MM-YY'))));

  public getSelectedEvent = () => this._selectedEvent.value;

  public deleteEvent = (event: IEvent) => {
    this._events.next(this._events.value.filter(item => item.uuid !== event.uuid));
    localStorage.setItem('events', JSON.stringify(this._events.value));
  }
}
