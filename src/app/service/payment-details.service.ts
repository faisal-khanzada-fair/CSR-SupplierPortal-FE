import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://faisalkhan-001-site4.itempurl.com/api/Payment/getsupplierpaymentdetails';
  getConfig(csrRef:string) {
    let body={
      "getSupplierPaymentDetails": {
          "AccountDocumentNumber": csrRef,
          "CompanyCode": "4000",
          "VendorNum": "736949"
      }
  }
    return this.http.post(this.configUrl,body)
  }
}
