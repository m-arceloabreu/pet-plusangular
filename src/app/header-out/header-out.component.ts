import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header-out',
  templateUrl: './header-out.component.html',
  styleUrls: ['./header-out.component.css']
})
export class HeaderOutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  sairBtn(){
    environment.token = ''
  }
}
