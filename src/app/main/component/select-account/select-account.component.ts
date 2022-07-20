import { Component, OnInit } from '@angular/core';
import { AccountSelectedService } from 'src/app/service/account-selected.service';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {
  listing:any;
  displayedColumns: string[] = ['AccountName1'];
  selectedRowIndex = -1;
  constructor(
    private messageService:AccountSelectedService,
    private accountService:AccountService,
    ) { }

  ngOnInit(): void {
    this.accountService.getSuppliers().subscribe((res:any)=>{
        console.log("Supplier List==>",JSON.parse(res.replaceAll("'",'"')));
        this.listing=JSON.parse(res.replaceAll("'",'"'));
    })
  }

  rowClicked(data:any){
    // this.accountStore.setState(data)
    this.messageService.setValue(data);
  }


highlight(row:any){
    this.selectedRowIndex = row.AccountId;
}

}
