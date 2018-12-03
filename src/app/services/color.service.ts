import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: Http) {}

  getColors(){
    return this.http.get('assets/data.json').pipe(map(data => data.json()));
  }
}
