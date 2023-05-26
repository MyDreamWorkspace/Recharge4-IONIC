import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.route.navigate(['./sign-in']);
    }, 1500);
  }

}
