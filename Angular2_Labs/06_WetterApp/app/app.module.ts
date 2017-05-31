import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
 // import { WetterService} from "./wetter.service";
 
import { HttpModule } from '@angular/http';
import { FormsModule} from "@angular/forms";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule],
    declarations: [ AppComponent ],
    providers: [/* WetterService globaler Service den alle Nutzen können */ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
