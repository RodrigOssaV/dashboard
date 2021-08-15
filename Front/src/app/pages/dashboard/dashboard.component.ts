import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/usuario/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {    
  }
  tab = 1;

  isActive(tabId: number): boolean {
    return this.tab === tabId;
  }

  openTab(tabId: number): void {
    this.tab = tabId;
  }
}
