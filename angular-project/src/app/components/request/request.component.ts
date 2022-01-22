import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  photos: Photo[];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getPhotos().subscribe((data) => this.photos = data);
  }

}
