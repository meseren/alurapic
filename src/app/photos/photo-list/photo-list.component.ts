import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../Photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }

}
