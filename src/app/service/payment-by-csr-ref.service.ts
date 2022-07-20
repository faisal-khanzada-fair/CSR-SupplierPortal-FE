import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentByCSRRefService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://faisalkhan-001-site4.itempurl.com/api/Payment/SearchPaymentByRef';
  getConfig(csrRef:string) {
    let body={
      "SearchPaymentsByRef": {
        "CompanyCode_Currency": {
          "item": [
            {
              "CompanyCode": "4000",
              "Currency": "AUD"
            }
          ]
        },
        "Vendor_CompanyCode": {
          "item": [
            {
              "VendorNum": "520010",
              "CompanyCode": "4000"
            },
            {
              "VendorNum": "736949",
              "CompanyCode": "4000"
            }
          ]
        },
        "AccountingDocNum": csrRef,
        "MaxpPoductsToReturn": "10000"
      }
    }
    return this.http.post(this.configUrl,body)
  }
}
