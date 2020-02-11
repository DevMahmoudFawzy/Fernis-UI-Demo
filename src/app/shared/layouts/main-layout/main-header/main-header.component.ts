import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchToggle(searchInp: HTMLInputElement, searchBtn: HTMLElement) {
    searchInp.classList.toggle('active');
    searchInp.focus();
    searchBtn.classList.toggle('animate');
    searchInp.value = '';
  }

}
