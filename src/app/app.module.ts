import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { DayComponent } from './day/day.component';
import { CreateEventButtonComponent } from './create-event-button/create-event-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SidebarComponent,
    CalendarHeaderComponent,
    DayComponent,
    CreateEventButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
