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



  temp: number = 0
  visibility: boolean = false
  panelOpenState = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.trateDate(this.weather.main.temp)
  }


  trateDate(weather: number) {

    this.weather.main.temp = Number(weather.toFixed(2))

  }

}
