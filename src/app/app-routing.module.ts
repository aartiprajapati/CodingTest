import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './PhotosListComp/photos-list/photos-list.component';
import { PhotoViewerComponent } from './PhotoViewerComp/photo-viewer/photo-viewer.component';


const routes: Routes = [
 { path:'photoviewer', component: PhotoViewerComponent },
 { path:'', component: PhotosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
