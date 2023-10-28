import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CompleteTemperatureComponent } from './pages/complete-temperature/complete-temperature.component';

const routes: Routes = [
  {
    path: 'complete/:id', component: CompleteTemperatureComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
