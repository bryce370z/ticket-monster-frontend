import { Component } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events = [
    {name: "Greg's tour"},
    {name: "Greg's tour 2"}
  ];
}
