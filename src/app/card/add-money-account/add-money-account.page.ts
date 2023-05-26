import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-money-account',
  templateUrl: './add-money-account.page.html',
  styleUrls: ['./add-money-account.page.scss'],
})
export class AddMoneyAccountPage implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  done() {
    this.route.navigate(['./tabs/card']);
  }

}
