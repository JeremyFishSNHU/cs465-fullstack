import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../../services/trip-data.service';



@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
    trips: Trip[] = [];

    constructor(private tripDataService: TripDataService) { }
    

    ngOnInit(): void {
  this.tripDataService.getTrips().subscribe({
    next: (value: Trip[]) => {
      this.trips = value;
    },
    error: (error: any) => {
      console.log('Error: ' + error);
    }
  });
}
}
