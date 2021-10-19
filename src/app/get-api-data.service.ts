import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BudgetCode } from './budget-code';

export interface Data {
  budgetCodeId: number; 
  fiscalYear: number; 
  budgetCode: string; 
  budgetTitle: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  apiBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/id/nnn';
  allBudgetId = 'https://uat.trc.eku.edu/budgetcodeexam/api/all';

  getAllBudgetId():Observable<Data>{
/*     const headers2 = new HttpHeaders({

    });

    const params2 = new HttpParams({

    })  */

    /* return this.http.get<Data>(this.allBudgetId,
       {headers: headers2, params: params2}); */

    return this.http.get<Data>(this.allBudgetId);
  }





/*   headers = new HttpHeaders({
    'content-type':'application/json',
  });

  params = new HttpParams()
  .set()
  .set()

  getSpecificBudget(): Observable<Data>{
    return this.http.get<Data>(this.apiBudgetId)
  }

/*   getAllBudgetId(): Observable<any>{
    return this.http.get<any>(this.allBudgetId)
  } */


}
