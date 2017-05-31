import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
// Bei dem Beispiel nicht benötigt
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SuchService} from "./such.service";
@NgModule({
    imports: [
        BrowserModule
      //  HttpModule,
    
    ],
    declarations: [AppComponent],
    providers: [ SuchService ],         /* TODO: Providers kommen hier rein */
    bootstrap: [AppComponent],
})
export class AppModule { }
