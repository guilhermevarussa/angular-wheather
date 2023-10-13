import { AfterContentInit, Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {
  displayedColumns: string[] = ['fellsLike', 'humity', 'tempMax', 'tempMin'];

  @Input() WeatherData: IWheather | any

  dataSource!: IWheather | any


  constructor() {}

  ngAfterContentInit(): void {
    this.dataSource = this.WeatherData

  }


}
