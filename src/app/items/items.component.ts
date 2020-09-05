import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/item';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getItems();
  }
  // tslint:disable-next-line: typedef
  public getItems() {
    this.apiService.getItems().subscribe(
      res => {
        this.items = res;
      },
      error => {
        alert("Server not available");
      }
    )
  }

}
