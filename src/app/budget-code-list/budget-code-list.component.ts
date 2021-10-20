import { Component, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-budget-code-list',
  templateUrl: './budget-code-list.component.html',
  styleUrls: ['./budget-code-list.component.css']
})
export class BudgetCodeListComponent implements OnInit {
  title="Get Specific Budget Code";
  budget: any;
  budgetCode: string = "";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("starting")
  }

  /* Calls api service to get data with requested Budget ID */
  getSpecificBudgetCode(formValue: NgForm): void{
    const code = {
      budgetCode: formValue.value.budgetCode
    }
    this.apiService.getSpecificBudgetCode(code.budgetCode).subscribe(data => {
      console.log(data);
      this.budget = data;
    }, (err) => {
      console.log("Unable to get data from URL " + err)
    });
  }

    /* Validate if api resonse has data */
    validateResponse(){
      console.log("validate Response");
      console.log("validate Response 1: " + this.budget.data);
      console.log("validate Response 2: " + this.budget.data.budgetCodeId);
      console.log("validate Response 3: " + this.budget.results);
      console.log("validate Response 4: " + this.budget.data.fiscalYear);
      if(this.budget.results==="Success"){
        /* this.response = true; */
        return true;
      }else{
        return false;
      }
    }
}



