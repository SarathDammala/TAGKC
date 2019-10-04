import { Component, OnInit , OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'TAGKC';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
