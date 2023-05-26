import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  public async getHomeData() {
    const token = await Preferences.get({key: 'token'});
    console.log(token);
    return this.http.post(environment.SERVER_URL + 'getDashBoardData', {}, {headers:{'x-access-token': String(token.value)}});
  }
}
