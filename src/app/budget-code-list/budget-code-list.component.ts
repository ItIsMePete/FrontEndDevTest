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



