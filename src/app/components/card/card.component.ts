import { Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() content!: any
  @Input() header!: any

  icon_name: string = '';


  constructor() {

  }

 


}
