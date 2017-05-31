import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// import { SuchService} from "./shared/such.service";
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        
    ],
    declarations: [AppComponent],
    providers: [/* TODO: Providers kommen hier rein SuchService */],
    bootstrap: [AppComponent],
})
export class AppModule { }
