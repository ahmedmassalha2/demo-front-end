import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/items/model/item';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-withdrawalquantity',
  templateUrl: './withdrawalquantity.component.html',
  styleUrls: ['./withdrawalquantity.component.css']
})
export class WithdrawalquantityComponent implements OnInit {

  model: Item = {
    itemID: 0,
    name: "",
    amount: 0,
    inventCode: ""
  };
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
  }
  withdrawalQuantItem(): void {
    this.apiService.withdrawalFromStock(this.model).subscribe(
      res => {
        location.replace('/Items');
      },
      err => {
        alert(err.error.text);
      }

    );
  }

}
