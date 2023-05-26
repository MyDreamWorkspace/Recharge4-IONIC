import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from "../../environments/environment"
import {Preferences} from "@capacitor/preferences";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private route: Router) {
  }

  //---------------Airtime and Data Apis
  public async executeAirtimeData(phone: string, category: string, amount: number, reference: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "executeAirtimeData", {number: phone, type: category, amount: amount, customer_reference: reference});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async validatePhone(phone : string, category: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "validatePhone", {number: phone, category});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  //---------------Airtime Data Apis End

  //---------------Cable TV Apis
  public async getNetworks(){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "getNetworks", {});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async getBanquets(net: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "getBanquets", {network : net});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async validateSmartCard(number: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "validateSmartCard", {number : number});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async executeCableTV(number: string, amount: number, reference: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "executeDSTV", {number, amount, customer_reference: reference});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }


  //---------------Cable/TV Apis End

  //---------------Electricity Apis
  public async getElectricityProducts(){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "getElectricityProducts", {});
      return res;
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async validateMeterNumber(service: string , meter : string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "validateMeter", {service: service, meter : String(meter)});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async executeElectricity(meter: string, service: string, amount: number, reference: string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "executeElectricity", {meter: meter, productId: service, amount: amount, customer_reference: reference});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  //----------------------------------------------------------------

  //---------------Bank APIS
  public async getBanks(){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "getCountriesAndBanks", {});
      return res;
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async validateAccount(bankCode: string , account : string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "validateAccount", {bankSortCode: bankCode, account : String(account)});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }

  public async executeTransfer(bankcode : string, account : string, amount : number, reference : string){
    let token = await Preferences.get({key: 'token'});
    try {
      axios.defaults.headers.common = {'x-access-token': `${token.value}`};
      const res = await axios.post(environment.SERVER_URL + "executeTransfer", {sortCode: bankcode, account: account, amount: amount, customer_reference: reference});
      return res;
      // this.route.navigate(['./tabs/payment']);
    }catch (e) {
      if (e.response && e.response.status == 401) {
        Preferences.clear();
        this.route.navigate(['./sign-in']);
      }
    }
  }
}
