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
    ShopNow: boolean;
    isShopped: boolean;

    constructor(private ItemService:ItemService){
        this.ItemService.getItems().subscribe(items => {this.items = items});
    }

    addItem(event){
        event.preventDefault();
        var newItem = {
            AisleNum: this.AisleNum,
            ItemName: this.ItemName,
            ShopNow: false, 
            isShopped: false
        }

        this.ItemService.addItem(newItem).subscribe(item => {
            this.items.push(item);
            this.ItemName = '';
        });
    }

    deleteItem(id){
        var items = this.items;

        this.ItemService.deleteItem(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0; i < items.length; i++){
                    if(items[i]._id == id)
                    {
                        items.splice(i,1);
                    }
                }
            }
        });
    }

    updateStatusSN(item){
        var _item = {
            _id:item._id,
            AisleNum: item.AisleNum,
            ItemName: item.ItemName,
            ShopNow : !item.ShopNow,
            
        };

        this.ItemService.updateStatusSN(_item).subscribe(data => {
            item.ShopNow = !item.ShopNow;
        });
    }

    updateStatusShopped(item){
        var _item = {
            _id:item._id,
            AisleNum: item.AisleNum,
            ItemName: item.ItemName,
            isShopped : !item.isShopped
        };

        this.ItemService.updateStatusShopped(_item).subscribe(data => {
            item.isShopped = !item.isShopped;
        });
    }
 }
