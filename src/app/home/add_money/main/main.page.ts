import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToBankTransfer() {
    this.router.navigate(['./tabs/home/addMoney/bankTransfer']);
  }

  goToPay() {
    this.router.navigate(['./tabs/home/addMoney/bankTransfer']);
  }

  goToCardPayment() {
    this.router.navigate(['./tabs/home/addMoney/bankTransfer']);
  }
}
