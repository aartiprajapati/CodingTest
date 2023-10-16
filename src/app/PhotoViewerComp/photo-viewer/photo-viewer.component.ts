import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  url:string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   /* read url from the query parameters */
   this.url = this.activatedRoute.snapshot.queryParams.url;
  }

}
