import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "src/assets/passengers";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.css"],
})
export class PassengerFormComponent {
  @Input() item?: Passenger;
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  baggages: Baggage[] = [
    {
      key: "none",
      value: "No baggage",
    },
    {
      key: "hand-only",
      value: "Hand baggage",
    },
    {
      key: "hold-only",
      value: "Hold baggage",
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage",
    },
  ];
  checkInHandle(isChecked: boolean) {
    if (isChecked) {
      this.item.checkInDate = Date.now();
    }
  }

  toDate(checkInDate: number): string {
    return new Date(checkInDate).toISOString().split("T")[0];
  }

  submit(passenger: Passenger) {
    this.edit.emit(passenger);
  }
}
