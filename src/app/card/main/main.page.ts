import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  link_card() {
    this.router.navigate(['./tabs/card/addMoneyAccount']);
  }

  gift_card() {
    this.router.navigate(['./tabs/card/giftCard']);
  }

  virtual_card() {
    this.router.navigate(['./tabs/card/virtualCard']);
  }

}
