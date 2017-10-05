import { Component } from '@angular/core';

@Component({
  selector: 'venue',
  templateUrl: './venue.component.html'
})
export class VenueComponent {
  venues = [
    {name: "Ryman"},
    {name: "Nissan Stadium"}
  ];
}
