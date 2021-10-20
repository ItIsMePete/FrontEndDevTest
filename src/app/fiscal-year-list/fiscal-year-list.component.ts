import { Component, OnInit } from '@angular/core';
import { ApiService } from '../get-api-data.service';
import { BudgetCode } from '../budget-code';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-fiscal-year-list',
  templateUrl: './fiscal-year-list.component.html',
  styleUrls: ['./fiscal-year-list.component.css']
})
export class FiscalYearListComponent implements OnInit {

  budget: any;
  /* fiscalYear: string =""; */
  fiscalYear: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
    /* Calls api service to get data with requested Budget ID */
  async getSpecificFiscalYear(formValue: NgForm):Promise<void>{
    const year = {
      fiscalYear: formValue.value.fiscalYear
    };
    this.apiService.getSpecificFiscalYear(year.fiscalYear).subscribe(data => {
      this.budget = data;;
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
}

