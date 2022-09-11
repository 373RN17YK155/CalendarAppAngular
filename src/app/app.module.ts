import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { DayComponent } from './day/day.component';
import { CreateEventButtonComponent } from './create-event-button/create-event-button.component';
import { SmallCalengarComponent } from './small-calengar/small-calengar.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CalendarHeaderComponent,
    DayComponent,
    CreateEventButtonComponent,
    SmallCalengarComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
