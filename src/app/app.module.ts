import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';
import { DriverRidesComponent } from './driver-rides/driver-rides.component';
import { DriverAcceptOrDeclineRideComponent } from './driver-accept-or-decline-ride/driver-accept-or-decline-ride.component';
import { DriverCancelledTripsComponent } from './driver-cancelled-trips/driver-cancelled-trips.component';
import { DriverCancelledTripsNotifierComponent } from './driver-cancelled-trips-notifier/driver-cancelled-trips-notifier.component';
import { DriverNotifierComponent } from './driver-notifier/driver-notifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DriverProfileComponent,
    DriverUpdateComponent,
    DriverRidesComponent,
    DriverAcceptOrDeclineRideComponent,
    DriverCancelledTripsComponent,
    DriverCancelledTripsNotifierComponent,
    DriverNotifierComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
