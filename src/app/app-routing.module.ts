import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PictureListComponent} from "./picture-list/picture-list.component";

const routes: Routes = [
  { path: 'pictures', component: PictureListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
