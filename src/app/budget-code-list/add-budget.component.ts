import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ApiService } from '../get-api-data.service';

//import ngform so ngform will work
import { NgForm } from '@angular/forms';
import { BudgetCode } from '../budget-code';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addBudget(formValue: NgForm): void{
    console.log("Component Add Api");
    const budgetData = {
            budgetCodeId: formValue.value.budgetCodeId,
            fiscalYear: formValue.value.fiscalYear,
            budgetCode: formValue.value.budgetCode,
            budgetTitle: formValue.value.budgetTitle
          };
          this.apiService.addBudget(budgetData).subscribe(data =>{
            console.log(data);
          }, (err) => {
            console.log("Unable to get data from URL " + err)
          });

    console.log(formValue.value);
  }
}
