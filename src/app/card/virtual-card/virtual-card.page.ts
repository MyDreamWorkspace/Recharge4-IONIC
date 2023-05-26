import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virtual-card',
  templateUrl: './virtual-card.page.html',
  styleUrls: ['./virtual-card.page.scss'],
})
export class VirtualCardPage implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  create_card() {
    this.route.navigate(['./tabs/card']);
  }
}
