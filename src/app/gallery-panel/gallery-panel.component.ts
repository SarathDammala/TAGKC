import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryData } from '../gallery/gallery.data.model';
import { animations } from '../animations';

@Component({
  selector: 'app-gallery-panel',
  templateUrl: './gallery-panel.component.html',
  styleUrls: ['./gallery-panel.component.css'],
  animations: [animations]
})
export class GalleryPanelComponent implements OnInit {
  @Input() galleryData: GalleryData;

  totalImageSliderSize = 4;
  galleryImageUrl = '';
  indx = 0;

  constructor(private router: Router) {
      setInterval(() => this.changeGalleryImageUrl() , 2000);
  }

  ngOnInit() {
  }

  onViewMoreClick() {
    this.router.navigate(['galleryview'], {state: {data: this.galleryData}});
  }

  changeGalleryImageUrl() {
    if (this.galleryData) {
      this.galleryImageUrl = this.galleryData.imageUrl[this.indx];
      this.indx ++;
      if (this.indx >= this.galleryData.imageUrl.length) {
        this.indx = 0;
      }
    }
  }

}
