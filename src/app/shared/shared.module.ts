import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPortalHeaderComponent } from './standard-portal-header/standard-portal-header.component';
import { StandardPortalFooterComponent } from './standard-portal-footer/standard-portal-footer.component';
import { StandardGridComponent } from './standard-grid/standard-grid.component';


import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider'; 
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { CustomerserviceService } from '../service/customerservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CsrNavComponent } from './csr-nav/csr-nav.component';
import { CsrConnectNavBarComponent } from './csr-connect-nav-bar/csr-connect-nav-bar.component'
import { CSRAngularModule } from '../../../components/CSR.AngularComponents/csrangular.module';
import { PageLoadingMessage } from './pageLoadingMessage/pageLoadingMessage';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    StandardPortalHeaderComponent,
    StandardPortalFooterComponent,
    StandardGridComponent,
    CsrNavComponent,
    CsrConnectNavBarComponent,
    PageLoadingMessage,
  ],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    CSRAngularModule,
    MatSelectModule
  ],
  exports:[
    StandardPortalHeaderComponent,
    StandardPortalFooterComponent,
    StandardGridComponent,
    CsrNavComponent,
    CsrConnectNavBarComponent,
    CSRAngularModule,
    PageLoadingMessage,
  ],
  providers:[CustomerserviceService]
})
export class SharedModule { }
