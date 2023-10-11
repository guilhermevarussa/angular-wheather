import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IWheather } from 'src/app/models/wheadther';
import { NewWheatherService } from 'src/app/services/new-wheather.service';
import { ObserverService } from 'src/app/services/observer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  weatherForm = this.formbuilder.group({
    city: ['', Validators.required]
  })

  weatherData!: IWheather | any;

  constructor(
    private observerService: ObserverService,
    private formbuilder: FormBuilder
  ) { }


  submitWheatherCity() {
    console.log(this.weatherForm.value);
    const city = String(this.weatherForm.value.city);

    this.sendCityName(city);
  }


  sendCityName(city: string) {
    this.observerService.updateData(city);
  }

}


