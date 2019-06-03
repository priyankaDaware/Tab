import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CorporateFormComponent } from './reference-section/corporate-form/corporate-form.component';
import { UIState, EventItem, BaseComponent } from '@exxat/foundation/core';
import { ContractComponent } from "./contract/contract.component"
@Component({
  selector: 'corporate-app',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent extends BaseComponent implements OnInit {

  Corparate = [
    {
      id:"1",
      name:"Huntingotan Hospital",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"2",
      name:" Inova Farefax ",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"3",
      name:"Northwell Health",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"4",
      name:"St. Augustine",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"5",
      name:"Cincinnati",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"6",
      name:"Maryland",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    },
    {
      id:"7",
      name:"OSU",
      aliasName:"Huntingotan Hospital",
      address1:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      address2:"301-A Kapil Zenith IT Park, Survey No 55, Hissa No 1, Off Vaidehi Enclave Road, Vaidehi Enclave, Bavdhan",
      state:"Maharashtra ",
      city:"Pune",
      zipCode:"411021",
      country:"India",
      contactNumber:"8149487497",
      website:"www.exxat.in"
    }
  ];
  links = [
    // { linkLabel: 'CONTRACT', link: './CorporateComponent' },
    // { linkLabel: 'SITEMANAGEMENT', link: '' },
    // { linkLabel: 'DETAILS', link:'/corporate-app-corporate-details/'}
{linkLabel:'Contract',contentComponent: 'ContractComponent'},
{linkLabel:'SiteManagement',link: ''},

  ];
  searchText: any;
  activeHospital: any;
  activeTab: any;
  getId: any;
  showMessage: boolean;

  ngOnInit() {
  }
  constructor(

    public router: Router,
    public route: ActivatedRoute,

  ) {
    super();
  }
  navigateStudent(item) {
    this.showMessage=false;
    this.activeTab = '';
    // calling this function on clicking on student-name in list
    this.activeHospital = item.id; //  updating active variable by current clicked student
    this.router.navigate([
      '/app/' + this.activeTab + '/' + this.activeHospital
    ]); // navigating to the student using current activetab and current clicked student
    // this.basicStudentInfoComponent.ngOnInit();
    // if (this.activeTab=='student/') {
    //   this.navigateTab(this.activeTab);
    // }
  }
  navigateTab(link) {
    //calling this function on clicking on tabs
    this.activeTab = link.link; // updating current tab
    this.router.navigate(['/app/' + link.link + '/' + this.activeHospital]); //navigating to tab using current active student and current clicked tab i.e. link
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  showCorporateReference(id){
    const uiState = new UIState(CorporateFormComponent,id);
    const eventItem: EventItem = { payload: uiState };
    this.updateRefArea(eventItem);
  }

}
