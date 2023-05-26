import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
  }

  airtime() {
    this.route.navigate(['./tabs/payment/airtime']);
  }

  tv () {
    this.route.navigate(['./tabs/payment/tv']);
  }

  send_money () {
    this.route.navigate(['./tabs/payment/sendMoney']);
  }

  electricity () {
    this.route.navigate(['./tabs/payment/electricity']);
  }

  lottery () {
    this.route.navigate(['./tabs/payment/lottery']);
  }

  utility () {
    this.route.navigate(['./tabs/payment/utility']);
  }
}
