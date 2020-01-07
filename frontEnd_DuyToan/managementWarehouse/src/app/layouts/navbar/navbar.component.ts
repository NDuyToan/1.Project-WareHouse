import { Component, OnInit } from '@angular/core';

import { LoginModalService } from './../../core/login/login-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginModalService: LoginModalService
  ) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('ahihi');
    this.loginModalService.open();
  }

}
