import { Component, OnInit } from '@angular/core';
 declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    $(document).ready(function () {
      $(".nav__icon").toggleClass("active");
      $(".sidebar").toggleClass("active");
    });
  }
}
