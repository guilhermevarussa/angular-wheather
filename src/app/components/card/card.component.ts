import { Component, Input } from '@angular/core';
import { IWheather } from 'src/app/models/wheadther';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() temp!: IWheather
  @Input() maxTemp!: IWheather
  @Input() minTemp!: IWheather
  @Input() humidity!: IWheather

  
constructor(){

}


}
