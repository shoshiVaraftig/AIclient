import { BrowserModule } from "@angular/platform-browser";
import { MyFormComponent } from "../my-form/my-form.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'; // ייבוא של FormsModule
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    declarations:[AppComponent,MyFormComponent],
    imports:[FormsModule,BrowserModule,HttpClientModule],
    bootstrap:[MyFormComponent]
})
export class AppModule{

}