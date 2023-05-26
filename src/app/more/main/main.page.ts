import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verify_identity() {
    this.router.navigate(['./tabs/more/verifyIdentity']);
  }

  report() {
    this.router.navigate(['./tabs/home']);
  }

  security() {
    this.router.navigate(['./tabs/more/security']);
  }

  referrals() {
    this.router.navigate(['./tabs/home']);
  }

  help() {
    this.router.navigate(['./tabs/more/getHelp']);
  }

  faq() {
    this.router.navigate(['./tabs/more/faq']);
  }
}
