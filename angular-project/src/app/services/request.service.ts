import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  appBase = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPhotos() : Observable<Photo[]> {
    return this.http.get<Photo[]>(this.appBase + 'photos');
  }
}
