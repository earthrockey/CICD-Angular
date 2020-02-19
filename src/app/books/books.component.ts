import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.httpClientService.getAllBook().subscribe(data => {
      this.books = data;
      console.log(this.books);
    });
  }

  deleteBook (data) {
    console.log(data);
    this.httpClientService.deleteBookByID(JSON.stringify({
      'id': data.id,
    })).subscribe(data => {
      console.log(data);
      this.books = data
    });
  }

}
