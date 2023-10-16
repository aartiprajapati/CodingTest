import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhotoserviceService } from './photoservice.service';
import { PhotosListComponent } from './PhotosListComp/photos-list/photos-list.component';
import { PhotoViewerComponent } from './PhotoViewerComp/photo-viewer/photo-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotoViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PhotoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
