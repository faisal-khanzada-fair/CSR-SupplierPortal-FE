import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PaymentByDateService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://faisalkhan-001-site4.itempurl.com/api/Payment/GetVendorPaymentbyDate';
 
  getConfig(startDate: Date, endDate: Date) {

    //Convert date to concatenated string of YYYYMMDD
    let convertedStartDate = "20200101";
    let convertedEndDate = "20220404";
    let body={
      "GetVendorPaymentByDate": {
        "FromDate": convertedStartDate,
        "CompanyCode_Currency": {
          "item": [
            {
              "CompanyCode": "",
              "Currency": ""
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
        "Maxproductstoreturn": "10000",
        "ToDate": convertedEndDate
      }
    }
    return this.http.post(this.configUrl, body)
  }
}
