import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import { ContractComponent } from './app/corporate/contract/contract.component';
import { CorporateDetailsComponent } from "./app/corporate/corporate-details/corporate-details.component";
debugger;
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'corporateDetails', component: CorporateDetailsComponent }

];

export const appRouting:ModuleWithProviders = RouterModule.forRoot(routes);
