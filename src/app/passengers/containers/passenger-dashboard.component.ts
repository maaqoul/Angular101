import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Passenger } from "src/assets/passengers";
import { PassengerService } from "../passenger.service";

@Component({
  selector: "component-dashboard",
  template: `
    <h3>AirLine passengers</h3>
    <passenger-counter [items]="passengers"></passenger-counter>
    <passenger-list
      *ngFor="let passenger of passengers"
      [passenger]="passenger"
      (edit)="editPassenger($event)"
      (remove)="removePassenger($event)"
    ></passenger-list>
  `,
  styleUrls: ["./passenger-dashboard.component.css"],
})
export class PassengerDashboardComponent implements OnInit, OnDestroy {
  public passengers;
  public passengersSubscription$: Subscription;

  constructor(private passengerService: PassengerService) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((passengers) => {
        this.passengers = passengers;
      })
      .catch(this.logError);
  }

  editPassenger(passenger: Passenger) {
    this.passengersSubscription$ = this.passengerService
      .editPassenger(passenger.id, passenger)
      .subscribe((passenger) => {
        this.passengers = this.passengers.map((p) => {
          if (p.id === passenger.id) {
            return Object.assign({}, p, passenger);
          }
          return p;
        });
      }, this.logError);
  }

  removePassenger(id: number) {
    this.passengersSubscription$ = this.passengerService
      .removePassenger(id)
      .subscribe(() => {
        this.passengers = this.passengers.filter(
          (passenger) => passenger.id !== id
        );
      }, this.logError);
  }

  ngOnDestroy() {
    this.passengersSubscription$.unsubscribe();
  }

  logError = (error: HttpErrorResponse) => console.error(error);
}
