import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-utility',
  templateUrl: './utility.page.html',
  styleUrls: ['./utility.page.scss'],
})
export class UtilityPage implements OnInit {

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
