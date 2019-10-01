import {Component, Input, OnInit, Output} from '@angular/core';
import { Picture } from '../model/picture';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})


export class PictureListComponent implements OnInit {

  pictures: Picture[];
  name: string;
  text: string;

  constructor(private userService: UserServiceService) {

  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.pictures = data;
    });
  }

  SelectPicture(picId: string) {
  this.name="assets/image/"+picId+".jpg";
  }


}
