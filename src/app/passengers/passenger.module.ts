import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { FormViewerComponent } from "./containers/form-viewer/form-viewer.component";

// components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

// services
import { PassengerService } from "./passenger.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerListComponent,
    FormViewerComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [PassengerService],
  exports: [PassengerDashboardComponent, FormViewerComponent],
})
export class PassengersModule {}
