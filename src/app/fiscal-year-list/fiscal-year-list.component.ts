import { Component, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';


@Component({
  selector: 'app-fiscal-year-list',
  templateUrl: './fiscal-year-list.component.html',
  styleUrls: ['./fiscal-year-list.component.css']
})
export class FiscalYearListComponent implements OnInit {
  title="Get Specific Fiscal Year";
  budget: any;
  b: BudgetCode[] = [];
  idInput= "";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("starting")
  }

  /* Calls api service to get data with requested Budget ID */
  getSpecificFiscalYear(s: string):void{
    this.apiService.getSpecificFiscalYear(s).subscribe(data => {
      console.log(data);
      this.budget = data;
    })

  }

  tester(n: string): void{
    /* this.apiService.tester(); */
    console.log("Testing Method component");
    this.apiService.tester(n).subscribe(data => {
      console.log("check 3: " + data);
      this.budget = data;
    })
  }

}

