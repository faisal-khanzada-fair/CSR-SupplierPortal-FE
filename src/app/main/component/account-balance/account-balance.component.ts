import { Component, OnInit } from '@angular/core';
import { AccountBalance } from 'src/app/model/account-balance.model';
import { AccountSelectedService } from 'src/app/service/account-selected.service';
import { AccountService } from 'src/app/service/account.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
  displayedColumns: string[] = ['VendorNum', 'Balance', 'CompanyCode', 'Debits','Credits'];
  dataSource = ELEMENT_DATA;
  message:any;
  selectedAccount: any;
  body:AccountBalance={
    "GetVendAcctBal": {
      "Flag": "X",
      "VendorNum_CompanyCode": { 
        "item": {
          "VendorNum": 200001,
          "CompanyCode": 4000
        }
      },
      "Period": 12,
      "Date": 20200101
    }
  };
  
  constructor(
    private accountService:AccountService,
    private messageService:AccountSelectedService,
    ) { }

  ngOnInit(): void {
    this.messageService.getValue().subscribe(res=>{
      this.selectedAccount=res;
      this.body.GetVendAcctBal.VendorNum_CompanyCode.item.VendorNum=this.selectedAccount.AccountId
      this.body.GetVendAcctBal.VendorNum_CompanyCode.item.CompanyCode=this.selectedAccount.Company
      this.fetchAccountBalances(this.body);
      console.log("Account Balance Selection==>",this.selectedAccount);
    });
  }

  fetchAccountBalances(data:any){
    this.accountService.getConfig(this.body).subscribe((res:any)=>{
      console.log("Account Balance Response==>",JSON.parse(res['result']));
      this.dataSource=JSON.parse(res['result']).getVendAcctBal.GtOut.item
      console.log("DataSrouce==>",this.dataSource);
    })
  }

}
