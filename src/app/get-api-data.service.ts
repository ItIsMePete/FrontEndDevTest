import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, interval} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BudgetCode } from './budget-code';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  allBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/all';
  specificBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/id/' /*+nnn*/
  specificFiscalYear = 'https://uat.trc.eku.edu/budgetcodeexam/api/year/' /* +nnnn*/
  specificBudgetCode = 'https://uat.trc.eku.edu/budgetcodeexam/api/code/' /*+xxxxx'*/
  postBudget = 'https://uat.trc.eku.edu/budgetcodeexam/api/add';

  constructor(private http: HttpClient) { }

  getAllBudgetId():Observable<BudgetCode>{
    return this.http.get<BudgetCode>(this.allBudgetId);
  }
  /* Get Budget from Specfific Budget Code Id provided by the User */
  getSpecificBudgetId(s: string): Observable<BudgetCode>{
    var s = this.specificBudgetId+s;
    return this.http.get<BudgetCode>(s);
  }
  /* Get Budget from Specific Fiscal Year provided by the User */
  getSpecificFiscalYear(y: any): Observable<BudgetCode>{
    var s = this.specificFiscalYear+y;
    return this.http.get<BudgetCode>(s);
  }
  /* Get Budget from Specific Budget Code */
  getSpecificBudgetCode(c: string): Observable<BudgetCode>{
    var s = this.specificBudgetCode+c;
    console.log("String: " + c);
    console.log("Budget Code Service Function: " + s);
    return this.http.get<BudgetCode>(s);
  }


  /* Post User input for Budget Code */
  addBudget(d: any){
    console.log("Service Add APi");
    return this.http.post(this.postBudget, d)
  }
}
