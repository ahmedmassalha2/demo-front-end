import { Component, OnInit } from '@angular/core';
import { Item } from '../items/model/item';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  id: number = 0;
  item: Item;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  getItem(): void {
    this.apiService.getItem(this.id).subscribe(
      res => {
        this.item = res;
      },
      err => {
        alert(err.error.text);
      }
    );
  }
}
