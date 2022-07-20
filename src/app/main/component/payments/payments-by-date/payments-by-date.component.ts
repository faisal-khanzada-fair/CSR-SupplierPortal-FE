import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentByDateService } from 'src/app/service/payment-by-date.service';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-payments-by-date',
  templateUrl: './payments-by-date.component.html',
  styleUrls: ['./payments-by-date.component.scss']
})

export class PaymentsByDateComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  paymentData : any;
  dataSource = new MatTableDataSource();
  placeholderForDateSearch: String = 'Search By Date Reference';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchByDateForm : FormGroup;
  searchFields = {
    startDate : "",
    endDate : ""
  };  

  constructor(
    private paymentByDateService: PaymentByDateService,
    private formBuilder: FormBuilder,
    public dialog:MatDialog 
  ) {
    this.searchByDateForm = formBuilder.group({
      startDate : "",
      endDate : ""
    });
  }

  ngOnInit(): void {
    this.fetchAccountBalances(this.searchByDateForm.value.startDate, this.searchByDateForm.value.endDate);
  }

  fetchAccountBalances(startDate: Date, endDate: Date){
    this.paymentByDateService.getConfig(startDate, endDate).subscribe((res:any)=>{
      console.log("Supplier Payment By Payment Date==>",JSON.parse(res['result']));

      this.paymentData = JSON.parse(res['result']).GetVendorPaymentByDate.OutResult.item;
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
    console.log(this.searchByDateForm.value.startDate + this.searchByDateForm.value.endDate)
    this.fetchAccountBalances(this.searchByDateForm.value.startDate, this.searchByDateForm.value.endDate);
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


