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
  img: any

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
      this.getWeatherIcon(this.weatherData.main.temp)
    })
  };


  getIamageData(temp: IWheather) {
    this.weatherService.getImage(temp).subscribe((response: IWheather) => {
      this.img = response
    })
  }


  getWeatherIcon(temp: number) {

    console.log('passou aqui')
    if (temp > 10) {
      this.icon_name = '2682814_cloud_moon_night_precipitation_snow_icon.svg';
    }
    return this.icon_name
  }



}
