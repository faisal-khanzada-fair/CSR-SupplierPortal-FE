import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { PaymentDetailsService } from 'src/app/service/payment-details.service';


@Component({
  selector: 'app-payment-details',
  templateUrl: 'payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit{
  url = './assets/html/receipt.component.html';
  csrReference:string ="";
  receiptDetails : any;
  constructor(
    public dialogRef: MatDialogRef<PaymentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private paymentDetailsService : PaymentDetailsService
  ) {
    this.csrReference = data.csrRef
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data.csrRef)
  }

  fetchReceiptDetails(csrRef:string){
    this.paymentDetailsService.getConfig(csrRef).subscribe((res:any)=>{
      console.log("Supplier payment details By CSR Ref==>",JSON.parse(res['result']));
      this.receiptDetails = JSON.parse(res['result']).getSupplierPaymentDetails.OutResult.item;
    })
  }

  ngOnInit(): void {
    this.fetchReceiptDetails(this.csrReference);
  }
}