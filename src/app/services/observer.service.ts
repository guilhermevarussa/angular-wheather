import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private dataSubject = new BehaviorSubject<string>('');

  constructor() { }


  getData(): Observable<string> {
    return this.dataSubject.asObservable();
  }


  updateData(newData: string) {
    this.dataSubject.next(newData);
  }


}
