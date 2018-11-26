import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  isMenuOpen: boolean;
  isSearchVisible: boolean;

  private _stateService: StateService;

  constructor(stateService: StateService) {
    this._stateService = stateService;
    this.isSearchVisible = false;
  }

  ngOnInit() {
    this.isMenuOpen = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this._stateService.toggleMenu(this.isMenuOpen);
  }

  toggleSearch(newVal: boolean) {
    this.isSearchVisible = newVal;
  }

}