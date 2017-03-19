import { Component } from '@angular/core';
import {ItemService} from './services/items.service';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[ItemService]
})
export class AppComponent { }
