import { Component, OnInit } from '@angular/core';
import { GalleryData } from '../gallery/gallery.data.model';
import { animations } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galleryview',
  templateUrl: './galleryview.component.html',
  styleUrls: ['./galleryview.component.css'],
  animations: [animations]
})
export class GalleryviewComponent {
  galleryData: GalleryData;
  imagesCol1: [];
  imagesCol2: [];
  imagesCol3: [];
  imagesCol4: [];
  chunkSize = 4;

  constructor(private router: Router) {
    this.galleryData = history.state.data;
    if (this.galleryData) {
      const splitArray = this.splitImageUrls();
      this.imagesCol1 = splitArray[0];
      this.imagesCol2 = splitArray[1];
      this.imagesCol3 = splitArray[2];
      this.imagesCol4 = splitArray[3];
    } else {
        this.router.navigate(['/']);
    }
   }

    splitImageUrls() {
        let temporal;
        temporal = [];
        for (let i = 0; i < this.galleryData.imageUrl.length; i += this.chunkSize) {
            temporal.push(this.galleryData.imageUrl.splice(i , i + this.chunkSize));
        }
        return temporal;
    }

    onBackToTop() {
      try {
       window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
       } catch (e) {
        window.scrollTo(0, 0);
        }
    }
  }
