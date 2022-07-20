import { Component, OnInit } from '@angular/core';
import { AccountSelectedService } from './service/account-selected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private messageService:AccountSelectedService){}
  ngOnInit(): void {

  }
  title = 'csr-supplier-portal';
}
