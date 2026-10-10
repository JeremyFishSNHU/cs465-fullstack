import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../models/trip';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrips() {
  return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
}

addTrip(trip: Trip) {
  return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
}

getTrip(tripCode: string) {
  return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${tripCode}`);
}

updateTrip(trip: Trip) {
  return this.http.put<Trip>(`${this.apiBaseUrl}/trips/${trip.code}`, trip);
}
}
