import { Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() WeatherData: IWheather | any




}
