import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../items/model/item';
import { ItemModel } from '../add-item/add-item.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private ADD_STOCK_URL = 'http://localhost:8080/item/addStock';
  private DELETE_ITEM_URL = 'http://localhost:8080/item/delete/';

  private GET_ITEMS_URL = 'http://localhost:8080/Items';
  private GET_ITEM_URL = 'http://localhost:8080/item/';
  private ADD_QUANTITY_URL = 'http://localhost:8080/item/depositQuantity';
  private WITHDRAWAL_QUANTITY_URL = 'http://localhost:8080/item/withdrawalQuantity';
  constructor(private http: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.GET_ITEMS_URL);
  }
  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.GET_ITEM_URL + id);
  }
  addItem(item: ItemModel): Observable<any> {
    return this.http.post(this.ADD_STOCK_URL, item);
  }
  addToStock(item: Item): Observable<any> {
    return this.http.post(this.ADD_QUANTITY_URL, item);
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(this.DELETE_ITEM_URL + id);
  }
  withdrawalFromStock(item: Item): Observable<any> {
    return this.http.post(this.WITHDRAWAL_QUANTITY_URL, item);
  }
}
