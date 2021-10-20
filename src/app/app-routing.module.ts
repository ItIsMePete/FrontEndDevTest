import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetCodeListComponent } from './budget-code-list/budget-code-list.component';
import { BudgetIdListComponent } from './budget-id-list/budget-id-list.component';
import { FiscalYearListComponent } from './fiscal-year-list/fiscal-year-list.component';

import { ApiComponent } from './full-budget-list/full-budget-list.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch: 'full'},
  { path: 'start-page', component: StartPageComponent },
  { path: 'full-budget-list', component: ApiComponent },
  { path: 'budget-id-list', component: BudgetIdListComponent},
  { path: 'fiscal-year-list', component: FiscalYearListComponent},
  { path: 'budget-code-list', component: BudgetCodeListComponent},
  { path: 'add-budget', component: AddBudgetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
