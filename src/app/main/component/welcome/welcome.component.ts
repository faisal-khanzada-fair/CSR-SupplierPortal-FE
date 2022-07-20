import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name:any;
  time:any;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.name="Kent"
    setInterval(()=>{
      this.time=new Date();
    },1000)
    this.fetchAccountBalances();
  }

  fetchAccountBalances(){
  }



}
