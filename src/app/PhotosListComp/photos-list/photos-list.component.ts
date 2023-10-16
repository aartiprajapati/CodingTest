import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/photo';
import { PhotoserviceService } from 'src/app/photoservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoserviceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /* invoke service to fetch data from API */
    this.photoService.getPhotos().subscribe((data:Photo[]) => {
      this.photos = data;
    });
  }

   /* navigate to the photo viewer component */
  onThumbnailClick(url:string): void {
    this.router.navigate(['/photoviewer'],{queryParams:{url:url}})
  }

}
