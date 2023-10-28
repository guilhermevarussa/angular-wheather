import { Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-complete-temperature',
  templateUrl: './complete-temperature.component.html',
  styleUrls: ['./complete-temperature.component.scss']
})
export class CompleteTemperatureComponent {

  @Input() visibility: boolean = false

  @Input() wheather!: IWheather


  constructor() { }

}
