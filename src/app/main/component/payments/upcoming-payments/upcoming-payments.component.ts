import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableExporterModule } from 'mat-table-exporter';
import { PaymentByDateService } from 'src/app/service/payment-by-date.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 10006, name: 'CSR-700062-5129401', weight: "11 Oct 2021", symbol: '$25000' },
  { position: 10007, name: 'CSR-700063-1259301', weight: "18 Feb 2022", symbol: '$9539.20' },
  { position: 10008, name: 'CSR-700064-9139410', weight: "19 Mar 2022", symbol: '$958.62' },
  { position: 10009, name: 'CSR-700065-2202437', weight: "10 Jun 2022", symbol: '$331.54' },
  { position: 10010, name: 'CSR-700066-1384912', weight: "15 Jul 2022", symbol: '$56.62' },
  { position: 10001, name: 'CSR-700058-2202447', weight: "18 Feb 2022", symbol: '$159404.62' },
  { position: 10002, name: 'CSR-700059-3054134', weight: "10 Feb 2022", symbol: '$11393.13' },
  { position: 10003, name: 'CSR-700060-9402013', weight: "22 Jan 2022", symbol: '$30,384.55' },
  { position: 10004, name: 'CSR-700061-4828219', weight: "14 Oct 2021", symbol: '$1334.92' },
  { position: 10005, name: 'CSR-700062-5930141', weight: "25 Dec 2021", symbol: '$500.62' },
];

@Component({
  selector: 'app-upcoming-payments',
  templateUrl: './upcoming-payments.component.html',
  styleUrls: ['./upcoming-payments.component.scss']
})
export class UpcomingPaymentsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;
  placeholderForInvoiceRefSearch: String = 'Search By Invoice Reference';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchByInvoiceRef = this.formBuilder.group({
    invoiceRef: '',
  });

  constructor(
    private paymentByDateService: PaymentByDateService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);;
  }

  fetchAccountBalances(invoiceRef: String = '') {
    // this.paymentByDateService.getConfig().subscribe((res: any) => {
    //   console.log('Account Balance Response==>', JSON.parse(res['result']));
    //   this.dataSource = JSON.parse(res['result']);
    // });
  }

  onSubmit() {
    this.fetchAccountBalances(this.searchByInvoiceRef.value);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

