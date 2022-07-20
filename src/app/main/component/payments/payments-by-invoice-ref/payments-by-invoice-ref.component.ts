import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentByInvoiceRefService } from 'src/app/service/payment-by-inv-ref.service';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-payments-by-invoice-ref',
  templateUrl: './payments-by-invoice-ref.component.html',
  styleUrls: ['./payments-by-invoice-ref.component.scss'],
})
export class PaymentsByInvoiceRefComponent implements OnInit {
  displayedColumns: string[] = ['account', 'csrReferenfce', 'invReference', 'paymentDate', 'amount'];
  paymentData : any;
  dataSource = new MatTableDataSource();
  placeholderForInvoiceSearch: String = 'Search By Invoice Reference';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchByInvoiceForm : FormGroup;
  searchFields = {
    invRef : ""
  };  

  constructor(
    private paymentByInvoiceRefService: PaymentByInvoiceRefService,
    private formBuilder: FormBuilder,
    public dialog:MatDialog 
  ) {
    this.searchByInvoiceForm = formBuilder.group({
      invRef: ""
    });
  }

  ngOnInit(): void {
    this.fetchAccountBalances(this.searchByInvoiceForm.value.invRef);
  }

  fetchAccountBalances(invRef:string){
    this.paymentByInvoiceRefService.getConfig(invRef).subscribe((res:any)=>{
      console.log("Supplier Payment By Invoice Ref==>",JSON.parse(res['result']));
      
      this.paymentData = JSON.parse(res['result']).SearchPaymentsByInvRef.OutPayment.item;
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
    console.log(this.searchByInvoiceForm.value.invRef)
    this.fetchAccountBalances(this.searchByInvoiceForm.value.invRef);
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


