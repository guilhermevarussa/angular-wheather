import { Component } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';
import { NewWheatherService } from 'src/app/services/new-wheather.service';
import { ObserverService } from 'src/app/services/observer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angular-weather';


  weatherData!: IWheather | any

  constructor(
    private weatherService: NewWheatherService,
    private observerService: ObserverService

  ) { }


  ngOnInit() {
    this.getCityName()

  }


  getCityName() {
    this.observerService.getData().subscribe(async (cityData) => {

      const newCity = String(cityData)

      this.getWeather(newCity)

    })
  }

  getWeather(city: string) {
    this.weatherService.getWheatherData(city).subscribe((response: IWheather) => {

      const weatherResponse = response

      console.log(weatherResponse)

      return this.weatherData = weatherResponse


    })


  }
}
