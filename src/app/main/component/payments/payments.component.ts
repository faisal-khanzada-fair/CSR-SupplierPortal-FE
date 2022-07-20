import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  selectedTab : number = 0;

  switchTab(newTab:number){
    this.selectedTab = newTab;
  }
  ngOnInit(): void {
  }

}
