import { Component } from '@angular/core';
import {ItemService} from '../../services/items.service';
import {Item} from '../../../items';

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: `items.components.html`
})
export class ItemComponent {
    items: Item[];
    AisleNum: number;
    ItemName: string;

    constructor(private ItemService:ItemService){
        this.ItemService.getItems().subscribe(items => {this.items = items});
    }

    addItem(event){
        event.preventDefault();
        var newItem = {
            AisleNum: this.AisleNum,
            ItemName: this.ItemName,
            Shop: {ShopNow: false, isShopped: false}
        }

        this.ItemService.addItem(newItem).subscribe(item => {
            this.items.push(item);
            this.ItemName = '';
        });
    }
 }
