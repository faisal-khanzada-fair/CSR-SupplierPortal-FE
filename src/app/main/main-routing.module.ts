import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBalanceComponent } from './component/account-balance/account-balance.component';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { InvoicesComponent } from './component/invoices/invoices.component';
import { OutstandingInvoicesComponent } from './component/outstanding-invoices/outstanding-invoices.component';
import { PaymentsComponent } from './component/payments/payments.component';
import { SupplierInvoiceComponent } from './component/supplier-invoice/supplier-invoice.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path:'',
  component:MainComponent,
  children:[
    {
      path:'welcome',
      component:WelcomeComponent
    },
    {
      path:'account-balance',
      component:AccountBalanceComponent
    },
    {
      path:'account-details',
      component:AccountDetailComponent
    },
    {
      path:'invoice',
      component:InvoicesComponent
    },
    {
      path:'supplier-invoice',
      component:SupplierInvoiceComponent
    },
    {
      path:'payment-information',
      component:PaymentsComponent
    },
    {
      path:'outstanding-invoices',
      component:OutstandingInvoicesComponent
    },
    {
      path:'',
      pathMatch: 'full',
      redirectTo: 'welcome'
    }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
