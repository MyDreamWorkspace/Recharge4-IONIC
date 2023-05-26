import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.page.html',
  styleUrls: ['./lottery.page.scss'],
})
export class LotteryPage implements OnInit {

  customAlertOptions: any = {  
    // header: 'Category',  
    // subHeader: 'Select a Category',  
    translucent: true  
  };  

  customActionSheetOptions: any = {  
    // header: 'Category',  
    // subHeader: 'Select a Category'  
  };  

  customPopoverOptions: any = {  
    // header: 'Category',
    // subHeader: 'Select a Category',  
  };  
  
  constructor(private route: Router) { }

  ngOnInit() {
  }

  done() {
    this.route.navigate(['./tabs/payment']);
  }
}
