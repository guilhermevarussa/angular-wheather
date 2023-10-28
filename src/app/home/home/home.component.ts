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


  see: boolean = false
  weatherData!: IWheather | any
  icon_name: string = ''


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
      this.weatherData = weatherResponse
      this.getWeatherIcon(this.weatherData)

      if (this.see === false) {
        this.see = true
      } else {
        this.see = false
      }

    })
  };


  getWeatherIcon(weatherData: any) {

    weatherData = this.weatherData

    switch (weatherData) {
      case
        weatherData.weather[0].description === 'light rain' && weatherData.weather[0].main === 'Rain':

        return this.icon_name = 'rain.svg';

      case
        weatherData.weather[0].description === 'overcast clouds' && weatherData.weather[0].main === 'Clouds':

        return this.icon_name = 'broken-clouds.svg';

      case
        weatherData.weather[0].description === 'mist' && weatherData.weather[0].main === 'Clouds':

        return this.icon_name = 'broken-clouds.svg';

      case
        weatherData.weather[0].description === 'few clouds' && weatherData.weather[0].main === 'Clouds':

        return this.icon_name = 'broken-clouds.svg';

      case
        weatherData.weather[0].description === 'clear sky' && weatherData.weather[0].main === 'Clear':

        return this.icon_name = 'clear-sky'

      default:

        return this.icon_name = 'clear-sky'
        break;
    }


  }



}
