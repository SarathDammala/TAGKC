import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryData } from './gallery.data.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryDataList = [];
  constructor(private router: Router) { }

  ngOnInit() {
    let ulrs;
    ulrs = [];
    ulrs.push('https://photos.smugmug.com/photos/i-73ZGSmD/0/X2/i-73ZGSmD-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-PDnFzQS/0/X2/i-PDnFzQS-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-K8MgjzT/0/X2/i-K8MgjzT-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-r7pnsNs/0/X2/i-r7pnsNs-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-XLF4s84/0/X2/i-XLF4s84-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Pm22rbF/0/X2/i-Pm22rbF-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Xn2xbnp/0/X2/i-Xn2xbnp-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Cz6NDz2/0/X2/i-Cz6NDz2-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-QPxXb6P/0/X2/i-QPxXb6P-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-t8ThwpM/0/X2/i-t8ThwpM-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-rkGKCzR/0/X2/i-rkGKCzR-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-txBhGcC/0/X2/i-txBhGcC-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-VzP6z2w/0/X2/i-VzP6z2w-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-LnBFHv8/0/X2/i-LnBFHv8-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-QnLvPpV/0/X2/i-QnLvPpV-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-x5jkBnh/0/X2/i-x5jkBnh-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-VqsZGJL/0/X2/i-VqsZGJL-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-nhXm9TZ/0/X2/i-nhXm9TZ-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-W5QxzGg/0/X2/i-W5QxzGg-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-HkTBK3m/0/X2/i-HkTBK3m-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-s2pbh8B/0/X2/i-s2pbh8B-X2.jpg');

    // tslint:disable-next-line:max-line-length
    this.galleryDataList.push(new GalleryData (ulrs , 'TAGKC 2018 Pinic', 'TAGKC 2018 Pinic held in Blah Blah park', 'Posted on 10/01/2017 on 12:00 AM'));

    ulrs = [];
    ulrs.push('https://photos.smugmug.com/photos/i-5P6nwxX/0/X2/i-5P6nwxX-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-CrNdt3s/0/X2/i-CrNdt3s-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-5CBFGFt/0/X2/i-5CBFGFt-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-gJPmRhq/0/X2/i-gJPmRhq-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-kV9vWGT/0/X2/i-kV9vWGT-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-m7pnqbX/0/X2/i-m7pnqbX-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-CbZspCf/0/X2/i-CbZspCf-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-J8F95PT/0/X2/i-J8F95PT-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-d7qTZqf/0/X2/i-d7qTZqf-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-ffDBKWk/0/X2/i-ffDBKWk-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-rkH9vfb/0/X2/i-rkH9vfb-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-8qJS9gB/0/X2/i-8qJS9gB-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-4C7jbSw/0/X2/i-4C7jbSw-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-vQSDdjj/0/X2/i-vQSDdjj-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-N9prJS8/0/X2/i-N9prJS8-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-HPjhSGR/0/X2/i-HPjhSGR-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Cmrzzjx/0/X2/i-Cmrzzjx-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-fVCXzcc/0/X2/i-fVCXzcc-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-DKHb7Gd/0/X2/i-DKHb7Gd-X2.jpg');
    // tslint:disable-next-line:max-line-length
    this.galleryDataList.push(new GalleryData (ulrs , 'Ugadi 2019 Celebrations', 'TAGKC 2019 Ugadi Celebrations held in Blah Blah hall', 'Posted on 10/02/2018 on 12:00 AM'));

    ulrs = [];
    ulrs.push('https://photos.smugmug.com/photos/i-8BNLkX9/0/X2/i-8BNLkX9-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-cWr39Jd/0/X2/i-cWr39Jd-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-sMNQ8dP/0/X2/i-sMNQ8dP-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-5XWSxMb/0/X2/i-5XWSxMb-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-43XFN9m/0/X2/i-43XFN9m-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-hHKWwVZ/0/X2/i-hHKWwVZ-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-76n7TzV/0/X2/i-76n7TzV-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-fV9pg2d/0/X2/i-fV9pg2d-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-BCWWqrH/0/X2/i-BCWWqrH-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-JVrCWjX/0/X2/i-JVrCWjX-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-P5QnSF6/0/X2/i-P5QnSF6-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-dpncnMZ/0/X2/i-dpncnMZ-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-h68TjTv/0/X2/i-h68TjTv-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-R6kWpKg/0/X2/i-R6kWpKg-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-m7pBHgm/0/X2/i-m7pBHgm-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-RXLKB5k/0/X2/i-RXLKB5k-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-cCpK3gS/0/X2/i-cCpK3gS-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Qzs9RNS/0/X2/i-Qzs9RNS-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-nQwsLb8/0/X2/i-nQwsLb8-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-drtCxxw/0/X2/i-drtCxxw-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-mPB6ssH/0/X2/i-mPB6ssH-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-Q8FX7LL/0/X2/i-Q8FX7LL-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-St9Xw82/0/X2/i-St9Xw82-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-pGXFC25/0/X2/i-pGXFC25-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-xRCGbW4/0/X2/i-xRCGbW4-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-fTXSL4P/0/X2/i-fTXSL4P-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-4c9XJqq/0/X2/i-4c9XJqq-X2.jpg');
    ulrs.push('https://photos.smugmug.com/photos/i-zPdXGML/0/X2/i-zPdXGML-X2.jpg');
    // tslint:disable-next-line:max-line-length
    this.galleryDataList.push(new GalleryData (ulrs , 'Deepavali 2018 Celebrations', 'TAGKC 2018 Deepavali Celebrations held in Blah Blah hall', 'Posted on 10/02/2019 on 12:00 AM'));
  }
}
