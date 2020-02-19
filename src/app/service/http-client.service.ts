import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  URL = 'http://localhost:8888';
  
  constructor(private httpClient: HttpClient) { }

  getAllBook() {
    return this.httpClient.get(this.URL + '/api/get/allbook');
  }

  getBookByID(data) {
    return this.httpClient.post(this.URL + '/api/get/bookbyid', data);
  }

  createBook(data) {
    return this.httpClient.post(this.URL + '/api/create/book', data);
  }

  deleteBookByID(data) {
    return this.httpClient.post(this.URL + '/api/delete/bookbyid', data);
  }

  editBookByID(data) {
    return this.httpClient.post(this.URL + '/api/edit/bookbyid', data);
  }
}
