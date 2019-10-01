import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { MatSliderModule,MatCheckboxModule } from '@angular/material';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    NgxEditorModule,
    TooltipModule.forRoot()
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
