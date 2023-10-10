import { Component } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';
import { NewWheatherService } from 'src/app/services/new-wheather.service';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angular-weather';


  fakeData: string = 'Sorriso';

  wheatherData!: IWheather|any

  constructor(
    private newWeatherService: NewWheatherService

  ) { }


  ngOnInit() {

    this.getNewWeahter(this.fakeData);

  }

  getNewWeahter(city: string) {
    this.newWeatherService.getWheatherData(city)
      .subscribe({
        next: (response) => {
          this.wheatherData = {
            base:response.base,
            clouds:response.clouds.all,
            coordLa:response.coord.lat,
            coordLo:response.coord.long,
            mainTemp:response.main.temp,
            name:response.name
          }
        }
      })
  };

}
