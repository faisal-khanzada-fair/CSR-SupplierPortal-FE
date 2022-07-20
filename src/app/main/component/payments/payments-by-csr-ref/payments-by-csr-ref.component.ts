import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentByCSRRefService } from 'src/app/service/payment-by-csr-ref.service';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-payments-by-csr-ref',
  templateUrl: './payments-by-csr-ref.component.html',
  styleUrls: ['./payments-by-csr-ref.component.scss'],
})
export class PaymentsByCsrRefComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  paymentData : any;
  dataSource = new MatTableDataSource();
  placeholderForCsrSearch: String = 'Search By CSR Reference';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchByCSRForm : FormGroup;
  searchFields = {
    csrRef : ""
  };  

  constructor(
    private paymentByCSRRefService: PaymentByCSRRefService,
    private formBuilder: FormBuilder,
    public dialog:MatDialog 
  ) {
    this.searchByCSRForm = formBuilder.group({
      csrRef: ""
    });
  }

  ngOnInit(): void {
    this.fetchAccountBalances(this.searchByCSRForm.value.csrRef);
  }

  fetchAccountBalances(csrRef:string){
    this.paymentByCSRRefService.getConfig(csrRef).subscribe((res:any)=>{
      console.log("Vendor Payment By CSR Ref==>",JSON.parse(res['result']));

      this.paymentData = JSON.parse(res['result']).SearchPaymentsByRefResponse.OutPayment.item;
      if (this.paymentData instanceof Array){
        this.dataSource.data = this.paymentData;
      }
      else {
        this.dataSource.data = [this.paymentData]
      }
      this.dataSource.paginator = this.paginator;
    })
  }

  onSubmit() {
    console.log(this.searchByCSRForm.value.csrRef)
    this.fetchAccountBalances(this.searchByCSRForm.value.csrRef);
  }

  openDialog(csrReference: String = ""): void {
    const dialogRef = this.dialog.open(PaymentDetailsComponent, {
      data: {csrRef: csrReference}, panelClass : 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


