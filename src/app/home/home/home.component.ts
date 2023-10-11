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


  fakeData: string = 'Sorriso';

  weatherData!: IWheather | any

  constructor(
    private weatherService: NewWheatherService,
    private observerService: ObserverService

  ) { }


  ngOnInit() {

    this.getCityName()

  }


  getCityName() {
    this.observerService.getData().subscribe((cityData) => {
      console.log(cityData);
    })

  }



  getWeather(city: string) {
    this.weatherService.getWheatherData(city).subscribe({
      next: (response) => {
        this.weatherData = {
          base: response.base,
          clouds: response.clouds.all,
          coordLa: response.coord.lat,
          coordLo: response.coord.long,
          mainTemp: response.main.temp,
          name: response.name,
        }
      }
    })


  }
}
