import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  id;
  code;
  name;
  detail;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

  createBook() {
    this.httpClientService.createBook(JSON.stringify({
      // 'id':this.id,
      'code':this.code,
      'name':this.name,
      'detail':this.detail,
    })).subscribe(data => {
      console.log(data)
    });
  }
}
