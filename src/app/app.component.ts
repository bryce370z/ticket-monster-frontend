import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  eventName = 'My cool event';

  locations = [
    {name: "Nashville", code: "37205"},
    {name: "Franklin", code: "37205"},
    {name: "Green Hill", code: "37205"},
    {name: "Lipscomb", code: "37205"},
  ];

}
