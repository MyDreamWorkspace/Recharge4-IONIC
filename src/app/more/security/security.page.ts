import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {
  status = {
    biometrics: false,
    emailAlert: false,
    transactionPin: false,
    twoStep: false
  };

  constructor() { }

  ngOnInit() {
  }

  changeStatus(name) {
  }
}
