import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  sideNavImg = ['summary','board','add-task','contacts']
  menuNames = ['Summary','Board','Add Task','Contacts']
  components = ['summary','board','add-task','contacts']

  constructor(private _router: Router) { }
  
  ngOnInit(): void {
  }

  openComponent(i) {
    this._router.navigateByUrl(`/${this.components[i]}`)
  }

  openLegalNotice()  {
    this._router.navigateByUrl(`/legal-notice`)
  }
}
