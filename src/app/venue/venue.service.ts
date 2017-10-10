import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Venue} from './venue';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class VenueService {

  private venueUrl = 'http://localhost:3000/venue';

  constructor(private http: Http) {}

  public getAllVenues(): Observable<Venue[]> {
    return this.http.get(this.venueUrl)
      .map(this.extractData);
  }

  public createVenue(venue: Venue): void {
    this.http.post(this.venueUrl, venue);
  }

  private extractData(res: Response) {
    console.log(res.json());
    const body = res.json();
    console.log(body.data);
    return body.data || { };
  }

}
