import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  open(title: string, message: string): Observable<boolean> {
    return new Observable((observer) => {
      const result = window.confirm(message);
      observer.next(result);
      observer.complete();
    });
  }
}
