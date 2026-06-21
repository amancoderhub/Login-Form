import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){}
  userName = localStorage.getItem('name');

  private authService = inject(ServiceService);
  private router = inject(Router)

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
