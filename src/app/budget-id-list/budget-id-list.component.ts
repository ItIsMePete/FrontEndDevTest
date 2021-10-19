import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';


@Component({
  selector: 'app-budget-id-list',
  templateUrl: './budget-id-list.component.html',
  styleUrls: ['./budget-id-list.component.css']
})
export class BudgetIdListComponent implements OnInit {
  title="Get Specific Budget Id";
  budget: any;
  b: BudgetCode[] = [];
  idInput= "";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("starting")
  }

  /* Calls api service to get data with requested Budget ID */
  getSpecificBudgetId(s: string):void{
    this.apiService.getSpecificBudgetId(s).subscribe(data => {
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
