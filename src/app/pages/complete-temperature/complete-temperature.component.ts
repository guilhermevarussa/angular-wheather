import { Component, Input, OnInit } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-complete-temperature',
  templateUrl: './complete-temperature.component.html',
  styleUrls: ['./complete-temperature.component.scss']
})
export class CompleteTemperatureComponent implements OnInit {

  @Input() visibility: boolean = false
  @Input() wheather!: IWheather


  constructor() { }
  ngOnInit(): void {

    console.log('cidade', this.wheather)

  }


}
