import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverAcceptOrDeclineRideComponent } from './driver-accept-or-decline-ride/driver-accept-or-decline-ride.component'; 
import { DriverCancelledTripsComponent } from './driver-cancelled-trips/driver-cancelled-trips.component';
import { DriverCancelledTripsNotifierComponent } from './driver-cancelled-trips-notifier/driver-cancelled-trips-notifier.component';
import { DriverNotifierComponent } from './driver-notifier/driver-notifier.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { DriverRidesComponent } from './driver-rides/driver-rides.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  
  
   {path:'profile',component: DriverProfileComponent},
   { path:'update',component: DriverUpdateComponent},
   {path:'driverrides',component: DriverRidesComponent},
   {path:'newRide',component:DriverAcceptOrDeclineRideComponent},
   { path:'cancelledRides',component:DriverCancelledTripsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
