import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  reset() {
    this.route.navigate(['./sign-in']);
  }
}
