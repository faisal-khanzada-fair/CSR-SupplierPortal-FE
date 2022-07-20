import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-grid',
  templateUrl: './standard-grid.component.html',
  styleUrls: ['./standard-grid.component.scss']
})
export class StandardGridComponent implements OnInit {
  products:any;
  constructor() { }

  ngOnInit(): void {
    this.products=[
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"bf6fe8d6-18d0-4b66-9e0b-72f1a39f5343","Currency":"AUD","Id":"200000","Name":"BI SOLAR SYDNEY TEAM 1","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2012,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"a64b254f-bba8-4d3b-bdfe-62dfdb373071","Currency":"AUD","Id":"200001","Name":"BI SOLAR MELBOURNE TEAM 1","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2012,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"acdc3ad6-d147-4442-9ee1-2b8e3d7b3026","Currency":"AUD","Id":"200002","Name":"BI SOLAR BRISBANE TEAM 1","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2012,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"2a0de1b4-e709-44fd-aa17-a30313817f07","Currency":"AUD","Id":"200005","Name":"BRADFORD ENERGY RATINGS","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2013,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"44500f9c-6663-4627-8ceb-00371fa79c41","Currency":"AUD","Id":"200006","Name":"ENERGY RATINGS BRISBANE","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2014,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"77cc68c6-74bb-4fdc-a508-038ff012232a","Currency":"AUD","Id":"200007","Name":"ENERGY RATINGS MELBOURNE","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2013,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"a9a7ca62-9be9-4cfc-abe6-566fae45b19c","Currency":"AUD","Id":"200008","Name":"ENERGY RATINGS HOBART","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2014,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"4153eedc-740e-46dc-9af1-019b0014a16b","Currency":"AUD","Id":"200009","Name":"ENERGY RATINGS ADELAIDE","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2003,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"022515a7-76a4-48ec-ade8-6b025eff7b7c","Currency":"AUD","Id":"200010","Name":"BES COMMERCIAL","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2013,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false},
      {"MasterId":"00000000-0000-0000-0000-000000000000","DbId":"997e96b1-6368-4070-bba0-6e054245217f","Currency":"AUD","Id":"200015","Name":"HEBEL INTERNAL CREW 1","GroupCode":"4000","GroupName":"CSR Building Products (AU) Ltd","CompanyCode":"4000","GroupURL":null,"Type":0,"Active":true,"FirstYear":2017,"PayerAccountType":0,"IsERSVendor":true,"IsCreditAccount":false}
    ]
  }
}
