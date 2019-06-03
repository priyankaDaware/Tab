import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import {MatListModule} from '@angular/material/list';

// export interface PeriodicElement {
//   name: string;

//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   { name: 'Helium', weight: 4.0026, symbol: 'He'},
//   { name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   { name: 'Boron', weight: 10.811, symbol: 'B'},
//   { name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   { name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'corporate-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // displayedColumns: string[] = [ 'name'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

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
      id:"3",
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
      id:"4",
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
    }
  ];
  links = [
    { linkLabel: 'CONTRACT', link: '/contract/' },
    { linkLabel: 'SITEMANAGEMENT', link: '/site/' },
    { linkLabel: 'DETAILS', link:'/app/'}

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
    public route: ActivatedRoute
  ) {}
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
}
