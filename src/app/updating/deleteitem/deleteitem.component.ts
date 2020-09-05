import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {
  id: number = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  deleteItem(): void {
    this.apiService.deleteItem(this.id).subscribe(
      res => {
        location.replace('/Items');
      },
      err => {
        alert(err.error.text);
      }
    );
  }
}
