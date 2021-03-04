import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Passenger } from "src/assets/passengers";

const URL = "http://localhost:3000/passengers";
@Injectable({
  providedIn: "root",
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  public getPassengers(): Promise<Passenger[]> {
    return this.http.get<Passenger[]>(URL).toPromise();
  }

  public editPassenger(
    id: number,
    passenger: Passenger
  ): Observable<Passenger> {
    return this.http.put<Passenger>(`${URL}/${id}`, passenger);
  }

  public removePassenger(id: number): Observable<any | void> {
    return this.http.delete(`${URL}/${id}`);
  }

  customOptions() {
    const options = {
      headers: new Headers({
        "content-type": "application/json",
      }),
    };
    return options;
  }
}
