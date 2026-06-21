import { Component } from '@angular/core';
import { User } from 'src/app/models/model';
import { ServiceService } from '../../../core/services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    user?: User;
    constructor(private service: ServiceService){}

    ngOnInit(): void {
      const userId = localStorage.getItem('userId');
      
          if (userId) {
            this.service.getProfile(Number(userId)).subscribe((data: User) => {
              this.user = data;
            });
          }
    }
}
