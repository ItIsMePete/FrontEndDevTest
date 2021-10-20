import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ApiService } from '../get-api-data.service';

//import ngform so ngform will work
import { BudgetCode } from '../budget-code';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {
  budgetCodeId: number = 0;
  fiscalYear: number = 0;
  budgetCode: string = "";
  budgetTitle: string = "";

  budget: any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  /* Add Budget to API server */
  addBudget(formValue: NgForm): void{
    console.log("Component Add Api");
    const budgetData = {
            budgetCodeId: formValue.value.budgetCodeId,
            fiscalYear: formValue.value.fiscalYear,
            budgetCode: formValue.value.budgetCode,
            budgetTitle: formValue.value.budgetTitle
          };
          this.apiService.addBudget(budgetData).subscribe(data =>{
            console.log("1st: " +  data);
            this.budget = data;
          }, (err) => {
            console.log("Unable to get data from URL " + err)
          });

    console.log("End Component API");
  }
    /* Validate if api resonse has data */
  /* Validate if api resonse has data */
  validateResponse(){
    console.log("validate Response 1: " + this.budget.data.fiscalYear);
    console.log("validate Response 2: " + this.budget.data.budgetCodeId);
    console.log("validate Response 3: " + this.budget.results);
    console.log("validate Response 4: " + this.budget.data);

    if(this.budget.results==="Success"){
      console.log("validated");
      return true;
    }else{
      console.log("no")
      return false;
      
    }
  }
}
