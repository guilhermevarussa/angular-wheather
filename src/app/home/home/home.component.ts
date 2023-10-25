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


  temp!: IWheather | any;
  maxTemp!: IWheather | any;
  minTemp!: IWheather | any;
  humidity!: IWheather | any;


  constructor(
    private weatherService: NewWheatherService,
    private observerService: ObserverService

  ) { }


  ngOnInit() {
    this.getCityName()

    this.temp = this.weatherData.main.temp
    this.maxTemp = this.weatherData.max_temp
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
      this.ajustData(this.weatherData)
      // this.getIamageData(this.weatherData)

    })
  };



  getIamageData(temp: IWheather) {
    this.weatherService.getImage(temp).subscribe((response: IWheather) => {
       this.img = response
    })
  }

  ajustData(weather: IWheather) {
    this.temp = weather.main.temp;
    this.maxTemp = weather.main.temp_max;
    this.minTemp = weather.main.temp_min;
    this.humidity = weather.main.humidity;

  }

}
