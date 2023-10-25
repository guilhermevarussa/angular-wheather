import { Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  @Input() content!: any
  @Input() header!: any
  @Input() weather!: IWheather

  temp:Number = 0

constructor(){
  // console.log(this.weather.weather.description)

}


trateDate(){
  const data = Number(this.weather.main.temp)
  console.log(data)
  return this.temp = data
}


getIcons(){
  
}


}
