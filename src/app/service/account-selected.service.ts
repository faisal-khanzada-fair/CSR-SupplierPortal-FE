import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountSelectedService {
  
  private value=new BehaviorSubject<any>({});
  private value$=this.value.asObservable();
  // messageSubject = new Subject<string>();

  constructor(){

  }

  public setValue(value:any){
    return this.value.next(value);
    // this.messageSubject.next(value.AccountName1);
    // localStorage.setItem("Supplier", this.value)
  }

  public getValue(){
    // console.log("Message Subject==>",this.messageSubject);
    // let value=localStorage.getItem("Supplier");
    console.log("Get Global Value",this.value$);
    return this.value$
  }
}
