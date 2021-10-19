import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BudgetCode } from './budget-code';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }
  allBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/all';
  specificBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/id/' /*+nnn*/
  specificFiscalYear = 'https://uat.trc.eku.edu/budgetcodeexam/api/year/' /* +nnnn*/

  getAllBudgetId():Observable<BudgetCode>{
/*     const headers2 = new HttpHeaders({});
    const params2 = new HttpParams({})  */
    /* return this.http.get<Data>(this.allBudgetId,
       {headers: headers2, params: params2}); */
    return this.http.get<BudgetCode>(this.allBudgetId);
  }
/* Get Budget from Specfific Budget Code Id provided by the User */
  getSpecificBudgetId(s: string): Observable<BudgetCode>{
    var s = this.specificBudgetId+s;
    return this.http.get<BudgetCode>(s);
  }
/* Get Budget from Specific Fiscal Year provided by the User */
  getSpecificFiscalYear(s: string): Observable<BudgetCode>{
    var s = this.specificFiscalYear+s;
    return this.http.get<BudgetCode>(s);
  }








  tester(n: string): Observable<BudgetCode>{
    console.log("In service method:: ");
    var s = this.specificBudgetId+n;
  /*   console.log((this.http.get<Data>(this.specificBudgetId,{params: paramId})));
    console.log((this.http.get<Data>(this.specificBudgetId,{params: paramId})).toString());
    return this.http.get<Data>(this.specificBudgetId,{params: paramId}); */
    return this.http.get<BudgetCode>(s);

  }
}
