import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @Input() weather!: IWheather
  @Input() icon_name!: string
  @Input() see: boolean = false



  temp: Number = 0
  visibility: boolean = false
  panelOpenState = false;


  constructor(private router: Router) { }

  ngOnInit() { }


  trateDate() {
    const data = Number(this.weather.main.temp)
    console.log(data)
    return this.temp = data
  }

  setCompleteWeather(weather: string) {

    console.log('sapecou')
    this.router.navigate([`/complete/${weather}`]);

    if (this.visibility === false) {
      this.visibility = true
    } else {
      this.visibility = false
    }

  }


}
