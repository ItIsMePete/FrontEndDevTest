import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-budget-id-list',
  templateUrl: './budget-id-list.component.html',
  styleUrls: ['./budget-id-list.component.css']
})
export class BudgetIdListComponent implements OnInit {
  title="Get Specific Budget Id";
  budget: any;
  budgetIdCode: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("starting")
  }

  /* Calls api service to get data with requested Budget ID */
  getSpecificBudgetId(formValue: NgForm):void{
    console.log("Component Budget Id");
    const id = {
      budgetIdCode: formValue.value.budgetIdCode
    }
    this.apiService.getSpecificBudgetId(id.budgetIdCode).subscribe(data => {
      console.log("In HTTP Get: " + data);
      this.budget = data;
    }, (err) => {
      console.log("Unable to get data from URL " + err)
    });

  }

  /* Validate if api resonse has data */
  validateResponse(){
    console.log("validate Response");
    if(this.budget.results==="Success"){
      /* this.response = true; */
      return true;
    }else{
      return false;
    }
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
