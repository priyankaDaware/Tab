import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { appRouting } from "./app-router-table";
import {
  UIFoundationModule,
  MaterialModule
} from '@exxat/ui';
import { RouterModule } from '@angular/router';
import { CorporateComponent } from './app/corporate/corporate.component';
import { CorporateDetailsComponent } from './app/corporate/corporate-details/corporate-details.component';
import { CorporateRequirementComponent } from './app/corporate/corporate-details/corporate-requirement/corporate-requirement.component';
import { CorporateStaffComponent } from './app/corporate/corporate-details/corporate-staff/corporate-staff.component';
import { CorporateRequirementFormComponent } from './app/corporate/reference-section/corporate-requirement-form/corporate-requirement-form.component';
import { CorporateStaffFormComponent } from './app/corporate/reference-section/corporate-staff-form/corporate-staff-form.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorporateFormComponent } from './app/corporate/reference-section/corporate-form/corporate-form.component';
import { ContractComponent } from './app/corporate/contract/contract.component';

@NgModule({
  declarations: [AppComponent, CorporateComponent, CorporateDetailsComponent, CorporateRequirementComponent,
    CorporateStaffComponent, CorporateRequirementFormComponent, CorporateStaffFormComponent, CorporateFormComponent,
     ContractComponent],
  imports: [
  RouterModule.forRoot([ { path: '', component: AppComponent }, ]),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UIFoundationModule,
    HttpClientModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CorporateRequirementFormComponent, CorporateStaffFormComponent,CorporateFormComponent],

})
export class AppModule {
}
