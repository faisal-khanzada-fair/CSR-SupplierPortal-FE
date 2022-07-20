import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csr-component',
  templateUrl: './csr-component.component.html',
  styleUrls: ['./csr-component.component.scss']
})
export class CsrComponent implements OnInit {

  //inputs
  @Input() text: string = "";

  constructor() {
  }

  ngOnInit(): void {

  }
}