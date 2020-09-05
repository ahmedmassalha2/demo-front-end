import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Item } from 'src/app/items/model/item';

@Component({
  selector: 'app-addquantity',
  templateUrl: './addquantity.component.html',
  styleUrls: ['./addquantity.component.css']
})
export class AddquantityComponent implements OnInit {

  model: Item = {
    itemID: 0,
    name: "",
    amount: 0,
    inventCode: ""
  };
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
  }
  addQuantItem(): void {
    this.apiService.addToStock(this.model).subscribe(
      res => {
        location.replace('/Items');
      },
      err => {
        alert(err.error.text);
      }
    );
  }

}

