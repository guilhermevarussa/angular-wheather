import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IWheather } from 'src/app/models/wheadther';
import { NewWheatherService } from 'src/app/services/new-wheather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  weatherForm = this.formbuilder.group({
    city: ['', Validators.required]
  })

  weatherData!: IWheather | any

  constructor(
    private weatherService: NewWheatherService,
    private formbuilder: FormBuilder
  ) { }


  submitWheatherCity() {
    console.log(this.weatherForm.value);

    const city = String(this.weatherForm.value.city)

    this.getWeather(city)

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
