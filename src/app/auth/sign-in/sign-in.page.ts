import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonDatetime, IonSlides } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service'
import { Preferences } from '@capacitor/preferences';
import jwt_decode from 'jwt-decode'
declare let anime: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  countries = new Array<any>();
  segment = 0;
  email = '';
  password = '';
  @ViewChild('slides', { static: true }) slider: IonSlides;

  constructor(private route: Router, private navCtrl: NavController, private auth: AuthService) {
  }

  async ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  continue() {
    this.auth.login(this.email, this.password)
      .subscribe((response) => {
        if(response.hasOwnProperty('token')){
          Preferences.set({key: "token", value: response['token']});
          let user = jwt_decode(response['token']);
          Preferences.set({key: "user", value: JSON.stringify(user)});
          this.route.navigate(['/tabs']);
        }
        else{
          alert(response);
        }
      }, (err) => {
        console.log('err', err.error);
      });
  }
  verification() {
    this.route.navigate(['./verification']);
  }

  forget_password() {
    this.route.navigate(['./reset']);
  }

  ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.logo .logo_img',
        delay: (el, i) => 1000 * i,
        scale: [50, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
      });
  }
}
