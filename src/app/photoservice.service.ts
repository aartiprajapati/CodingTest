import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  constructor(private httpClient:HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/photos")
    .pipe(
      map((photos) => photos.map( photo => this.normalizePhotoData(photo))
      )
    )
  }

  normalizePhotoData(obj:any): Photo {
      return new Photo(obj);
  }

}
