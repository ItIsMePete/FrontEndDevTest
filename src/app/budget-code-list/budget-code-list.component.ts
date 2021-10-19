import { Component, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';


@Component({
  selector: 'app-budget-code-list',
  templateUrl: './budget-code-list.component.html',
  styleUrls: ['./budget-code-list.component.css']
})
export class BudgetCodeListComponent implements OnInit {
  title="Get Specific Budget Code";
  budget: any;
  b: BudgetCode[] = [];
  idInput= "";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("starting")
  }

  /* Calls api service to get data with requested Budget ID */
  getSpecificBudgetCode(s: string): void{
    this.apiService.getSpecificBudgetCode(s).subscribe(data => {
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



