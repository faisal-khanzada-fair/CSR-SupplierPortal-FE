import { Component, OnInit } from '@angular/core';
import { AccountSelectedService } from '../service/account-selected.service';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  show:boolean=false
  constructor(
    private msgservice: AccountSelectedService, // inject service
    public loaderService:LoaderService
  ) { }

  ngOnInit(): void {
  }

  showSlidebar(){
    if(this.show==false){
      this.show=true;
    }
    else{
      this.show=false
    }
  }

  navigateToLogin(){
    const loginUrl = "https://csrexternaldevstg.b2clogin.com/csrexternaldevstg.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_CSR_MY_CSR_SignUp_SignIn_UF&client_id=15aa7d56-2138-41e5-93a1-b7f321f89e97&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&scope=openid&response_type=id_token&prompt=login";
    window.open(loginUrl, "_self");
  }

}
