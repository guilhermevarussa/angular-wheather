import { Component } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';
import { NewWheatherService } from 'src/app/services/new-wheather.service';

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

    // this.getNewWeahter(this.fakeData);

  }

  
}
