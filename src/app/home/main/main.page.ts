import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomeService } from "../../api/home.service";
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  modes = ['date-time'];
  select_seat: string = "1";
  select_vehicle: string = "1";
  segment = 0;
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  userInfo: Object;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild(IonDatetime) datetime: IonDatetime;
  constructor(private route: Router, private homeService: HomeService) {
    this.setToday();
    var res = this.homeService.getHomeData();
    res.then((res) => {
      res.subscribe(response => {
        console.log(response);
        this.userInfo = response['user'];
      });
    });
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'd MMM, HH:mm' );
  }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  select_location() {
    this.route.navigate(['./select-location']);
  }
  listOfPooler() {
    this.route.navigate(['./list-of-pooler']);
  }
  poolTakers() {
    this.route.navigate(['./pool-takers']);
  }
  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'd MMM, HH:mm');
  }

  addMoney () {
    this.route.navigate(['./tabs/home/addMoney']);
  }

  wallet () {

  }

  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }

}
