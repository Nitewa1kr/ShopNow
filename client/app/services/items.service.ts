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
        return this.http.get('http://localhost:4001/api/items')
        .map(res => res.json());
    }

    addItem(newItem)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:4001/api/item', JSON.stringify(newItem),{headers: headers}).map(res => res.json());
    }
}