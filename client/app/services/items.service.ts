import{Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService{
    constructor(private http:Http)
    {
        console.log('ItemService Initialized....');
    }

    getItems()
    {
        return this.http.get('/api/items')
        .map(res => res.json());
    }

    addItem(newItem)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/item', JSON.stringify(newItem),{headers: headers}).map(res => res.json());
    }

    deleteItem(id)
    {
        return this.http.delete('/api/item/'+id)
        .map(res => res.json());
    }

    updateStatusSN(itemSN){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/item/' + itemSN._id, JSON.stringify(itemSN),{headers: headers}).map(res => res.json());
    }

    updateStatusShopped(itemShopped){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/item/' + itemShopped._id, JSON.stringify(itemShopped),{headers: headers}).map(res => res.json());
    }
}