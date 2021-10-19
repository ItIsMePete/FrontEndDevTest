import { Component, OnInit } from '@angular/core';

import { BudgetCode } from '../budget-code';
import { ApiService } from '../get-api-data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-full-budget-list',
  templateUrl: './full-budget-list.component.html',
  styleUrls: ['./full-budget-list.component.css']
})


export class ApiComponent implements OnInit {
  /*Working title */
  title="Full Budget List";
  /*variable catch API response */
  budget: any;
  /*Unused element, unknown if will reuse or not */
  budgetcodes: BudgetCode[] = [];

  /*Calling apiService from app/get-api-data.service.ts
  Naming needs to be changed */
  constructor(private apiService: ApiService) { }

  
  ngOnInit(): void {
    this.getAllBudgetId();
  }

  /*Unused elements, unknown if will reuse */
/*   getAllBudgetId(): void{
    this.apiService.getAllBudgetId()
    .subscribe(data => {
      console.log(data);
      this.budget = data.budgetCodeId;
    })
  } */
 /*   getAllBudgetId(): void{
     this.apiService.getAllBudgetId()
     .subscribe(data => {this.budget = data;
   }, (err) => {
     console.log("Unable to get data from URL" + err); 
   });
  } */

  /*Get All Budget Id from EKU API via app/get-api-data.service.ts file */
  getAllBudgetId(): void{
    this.apiService.getAllBudgetId().subscribe(data => {
      console.log(data);
      this.budget = data;
    })
  }
}

