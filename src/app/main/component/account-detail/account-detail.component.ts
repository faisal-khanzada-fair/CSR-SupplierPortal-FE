import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  supplierList:any;
  selectedAccount:any;
  getAccountById:any;
  constructor(
    private messageService:AccountSelectedService,
    private accountService:AccountService,
    ) { }

  ngOnInit(): void {
    this.messageService.getValue().subscribe(res=>{
      this.selectedAccount=res;
      if(this.selectedAccount){
        this.fetchSupplierId(this.selectedAccount.AccountId,this.selectedAccount.Company)
      }
    })
    console.log("Selected Account In Account Detail==>",this.selectedAccount);
  }

  getRecord(rowData:any){
    console.log("row data-->",rowData);
  }

  fetchSupplierId(id:any,companyCode:any){
    console.log(id,companyCode)
    this.accountService.getSupplierDetail(id,companyCode).subscribe((res:any)=>{
      console.log("result==>",res)
      if(res['isSuccess']=true){
        this.getAccountById=res;
        this.getAccountById=JSON.parse(this.getAccountById.result);
        this.getAccountById=this.getAccountById.getSupplierDetails.OutResult.item
        console.log("Account By Id",this.getAccountById);
      }
    })
  }

}
