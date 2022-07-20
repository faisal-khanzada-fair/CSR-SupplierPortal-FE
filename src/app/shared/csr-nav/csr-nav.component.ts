import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csr-nav',
  templateUrl: './csr-nav.component.html',
  styleUrls: ['./csr-nav.component.scss']
})
export class CsrNavComponent implements OnInit {
  invoiceType = 'Invoice';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Navigation(route:any){
    console.log("Route==>",route);
    this.router.navigate([route]);
  };

}
