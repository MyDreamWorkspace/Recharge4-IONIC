import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.page.html',
  styleUrls: ['./gift-card.page.scss'],
})
export class GiftCardPage implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  load() {
    this.route.navigate(['./tabs/card']);
  }
}
