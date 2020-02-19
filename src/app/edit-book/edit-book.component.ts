import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book;
  id;
  code;
  name;
  detail;

  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.httpClientService.getBookByID(JSON.stringify({
      'id': parseInt(this.route.snapshot.paramMap.get("id")),
    })).subscribe(data => {
      console.log(data)
      this.book = data
      this.id = this.book.id
      this.code = this.book.code
      this.name = this.book.name
      this.detail = this.book.detail
    });
  }

  editBook() {
    this.httpClientService.editBookByID(JSON.stringify({
      'code':this.code,
      'name':this.name,
      'detail':this.detail,
    })).subscribe(data => {
      console.log(data)
    })
  }
}
