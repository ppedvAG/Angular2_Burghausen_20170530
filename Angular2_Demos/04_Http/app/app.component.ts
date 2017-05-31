import { Component } from '@angular/core';
import { DataService } from './data.service';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'meine-app',
  template: `
    <button (click)="getData()">Get Data</button>
    <ul>
      <li *ngFor="let data of daten">ID: {{data.id}} Name: {{data.name}}</li>
    </ul>
  `
})
export class AppComponent {
  dataService: DataService;
  daten: Array<Data>;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.daten = [];
  }

  getData() {
    this.dataService.getData()
        .subscribe((daten) => {
          this.daten = daten;
        });
  }
}
