import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ItemComponent }  from './components/items/items.components';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
