import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '' , redirectTo : 'books', pathMatch: 'full'},
  { path: 'books', component: BooksComponent },
  { path: 'createbook', component: CreateBookComponent },
  { path: 'editbook/:id', component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
