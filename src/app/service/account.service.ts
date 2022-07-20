import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  configUrl = environment.API_URL+'/api/Payment/GetVendorAcctBalance';
  supplierAPI=environment.API_URL+'/api/Payment/GetSupplierAccounts'
  SupplierDetailAPI=environment.API_URL+'/api/Payment/getsupplierdetails'
  


  getConfig(body:any) {
    return this.http.post(this.configUrl,body)
  }

  getSuppliers(){
    return this.http.get(this.supplierAPI)
  }

  getSupplierDetail(id:any,companyCode:any){
    let body={
      "getSupplierDetails": {
        "VendorNum": '0000200001',
        "CompanyCode": '4000'
       }
    }
    return this.http.post(this.SupplierDetailAPI,body)
  }
}
