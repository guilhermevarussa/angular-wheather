import { Component } from '@angular/core';
import { WheatherService } from './services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-weather';


  fakeData: string = 'Brasilia';


  constructor(private wheatherService: WheatherService) {

    this.wheatherService.getWeatherData(this.fakeData)


  }

}
