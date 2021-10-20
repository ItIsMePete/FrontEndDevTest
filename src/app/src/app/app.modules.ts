import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog'; 
import { MatTabsModule} from '@angular/material/tabs'; 
import { MatExpansionModule} from '@angular/material/expansion'; 
import { MatDividerModule} from '@angular/material/divider'; 
import { MatStepperModule} from '@angular/material/stepper'; 
import { MatRadioModule} from '@angular/material/radio'; 
import { MatTreeModule} from '@angular/material/tree';  
import { MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSelectModule} from '@angular/material/select'; 
import {MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/* Imported HttpClientModuel into AppModule */
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './full-budget-list/full-budget-list.component';
import { StartPageComponent } from './start-page/start-page.component';
import { BudgetIdListComponent } from './budget-id-list/budget-id-list.component';
import { FiscalYearListComponent } from './fiscal-year-list/fiscal-year-list.component';
import { BudgetCodeListComponent } from './budget-code-list/budget-code-list.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    StartPageComponent,
    BudgetIdListComponent,
    FiscalYearListComponent,
    BudgetCodeListComponent,
    AddBudgetComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
/*     Added HttpClientModule to Imports Array*/    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
