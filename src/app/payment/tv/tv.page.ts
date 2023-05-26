import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PaymentService} from "../../api/payment.service";
import {
  Flutterwave,
  InlinePaymentOptions,
  PaymentSuccessResponse,
} from "flutterwave-angular-v3";

import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TVPage implements OnInit {

  networks = [];
  banquets = [];
  smartcard = "";
  network = "";
  banquet = "";
  amount = 0;

  //Variables for Validation
  loadable = false;
  error = false;
  timerId = null;
  //Variables for Payment
  publicKey = "FLWPUBK_TEST-3ed051179d137be79a3774ed0950eafa-X";
  customerDetails = {
    name: "Demo Customer  Name",
    email: "customer@mail.com",
    // phone_number: "08100000000",
  };
  meta = { consumer_id: "7898", consumer_mac: "kjs9s8ss7dd" };

  paymentData: InlinePaymentOptions = {
    public_key: this.publicKey,
    tx_ref: this.generateReference(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url: '',
    meta: this.meta,
    customer: this.customerDetails,
    // customizations: this.customizations,
    callback: this.makePaymentCallback,
    onclose: this.closedPaymentModal,
    callbackContext: this,
  }

  constructor (private route: Router, private payment: PaymentService, private flutterwave : Flutterwave) {
  }
  async ionViewWillEnter() {
    const nets = await this.payment.getNetworks();
    console.log(nets);
    if(nets.data.status == "success"){
      this.networks = nets.data.result.products;
    }
    // const bans = payment.getBanquets("");
  }

  ngOnInit() {
  }

  async onNetworkChange(){
    const bans = await this.payment.getBanquets(this.network);
    console.log(bans);
    if(bans.data.status == "success"){
      this.banquets = bans.data.result.products;
    }
  }

  async onSmartcardChange(){
    console.log(this.smartcard);
    if(this.timerId != null)
      clearTimeout(this.timerId);
    this.timerId = setTimeout(async () => {
      const res = await this.payment.validateSmartCard(this.smartcard);
      if(res.data.status == "success"){
        this.error = false;
      }else{
        this.error = true;
      }
      this.loadable = false;
    }, 400);
    this.loadable = true;
  }

  done() {
    this.route.navigate(['./tabs/payment']);
  }

  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }

  async makePaymentCallback(response: PaymentSuccessResponse) {
    console.log("Pay", response);
    const { value } = await Preferences.get({key: 'user'});
    const user = JSON.parse(value);
    let reference = user.userName + '@' + Date.now();
    reference = reference.replace(' ', '');
    console.log(reference);
    const res = await this.payment.executeCableTV(this.smartcard, this.amount, reference);
    if(res.data.status !== "error"){
      this.route.navigate(['/tabs/payment/transactionSuccess']);
    }
    this.flutterwave.closePaymentModal(5);
  }

  closedPaymentModal(): void {
    console.log("payment is closed");
  }
}
