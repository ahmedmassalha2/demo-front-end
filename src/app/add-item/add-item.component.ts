import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  model: ItemModel = {
    name: '',
    amount: 0,
    inventCode: ''
  };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  //subs
  sendItem(): void {
    this.apiService.addItem(this.model).subscribe(
      res => {
        location.replace('/Items');
      },
      err => {
        alert(err.error.text);
      }
    );
  }
}

export interface ItemModel {
  name: String;
  amount: Number;
  inventCode: String;
}