import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-map',
  templateUrl: './the-map.page.html',
  styleUrls: ['./the-map.page.scss'],
})
export class TheMapPage implements OnInit {

  constructor() { }
  display = false;
  swipeUp() {
    this.display = !this.display;
    console.log('Clicked');
  }
  ngOnInit() {
  }

}
