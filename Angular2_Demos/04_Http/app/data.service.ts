import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  http: Http;
  url: string;
  constructor(http: Http) {
    this.http = http;
    
      this.url = "http://localhost:3001/data";
  }

  getData() {
    const observable = this.http.get(this.url);                           
    const anotherObservable = observable.map((response) => response.json().data);
    return anotherObservable;      
  };  
}
