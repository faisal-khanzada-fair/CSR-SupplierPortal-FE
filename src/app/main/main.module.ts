import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AccountBalanceComponent } from './component/account-balance/account-balance.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { PaymentsComponent } from './component/payments/payments.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PaymentsByDateComponent } from './component/payments/payments-by-date/payments-by-date.component'; 
import { CalendarModule } from 'primeng/calendar';
import { SupplierInvoiceComponent } from './component/supplier-invoice/supplier-invoice.component';
import { OutstandingInvoicesComponent } from './component/outstanding-invoices/outstanding-invoices.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { SelectAccountComponent } from './component/select-account/select-account.component';
import { PaymentsByCsrRefComponent } from './component/payments/payments-by-csr-ref/payments-by-csr-ref.component';
import { PaymentsByInvoiceRefComponent } from './component/payments/payments-by-invoice-ref/payments-by-invoice-ref.component';
import { UpcomingPaymentsComponent } from './component/payments/upcoming-payments/upcoming-payments.component';
import { PaymentDetailsComponent } from './component/payments/payment-details/payment-details.component';
import {MatTableExporterModule } from 'mat-table-exporter';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    WelcomeComponent,
    AccountBalanceComponent,
    AccountDetailComponent,
    PaymentsComponent,
    PaymentsByDateComponent,
    SupplierInvoiceComponent,
    OutstandingInvoicesComponent,
    SelectAccountComponent,
    PaymentsByCsrRefComponent,
    PaymentsByInvoiceRefComponent,
    UpcomingPaymentsComponent,
    PaymentDetailsComponent,
    ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatCardModule,
    CalendarModule,
    MatDialogModule,
    MatTableExporterModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PaymentDetailsComponent,
    MatTableExporterModule,
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ]
})
export class MainModule { }
