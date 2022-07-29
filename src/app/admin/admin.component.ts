import { Component, HostListener, OnInit } from '@angular/core';
import { faAngleDown, faBars, faCubes, faGaugeHigh, faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
    this.getScreenSize();
  }

  openMenu = false;
  currentWidth = 0;
  dropdown = false;

  dropdownMenu1 = false;

  marginRight = 8;

  faCubes = faCubes;
  faBars = faBars;
  faGaugeHigh = faGaugeHigh;
  faAngleDown = faAngleDown;
  faLocationDot = faLocationDot;
  faUsers = faUsers;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  toggleSidebar(): void {
    this.openMenu = !this.openMenu;
    if(this.openMenu == true) {
      this.marginRight = 20;
    } else {
      if(this.currentWidth <= 600) {
        this.marginRight = 18;
      } else {
        this.marginRight = 8;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    this.currentWidth = window.innerWidth;
  }

  toggleDropdownMenu1(): void {
    this.dropdownMenu1 = !this.dropdownMenu1;
  }

  logout(): void {

  }
}
