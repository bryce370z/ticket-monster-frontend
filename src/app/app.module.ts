import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { VenueComponent } from './venue/venue.component';
import {EventService} from './event/event.service';

import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'event',
        component: EventComponent
      }
      ,
      {
        path: 'venue',
        component: VenueComponent
      }
    ])
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
