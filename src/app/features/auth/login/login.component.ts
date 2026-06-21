import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core/services/service.service';
import { User } from 'src/app/models/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup ;
  errorMessage = '';

  constructor(){
  }

  private formbuilder = inject(FormBuilder);
  private authService = inject(ServiceService);
  private router = inject(Router);

  ngOnInit(){

    this.loginForm = this.formbuilder.nonNullable.group({
      email: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  OnSubmit(){
    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe((users: User[]) => {
    if (users.length > 0) {
        const user = users[0];
    
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem('userId', user.id.toString());
        localStorage.setItem('userName', user.name);
    
        this.router.navigate(['/profile']);
    }
    else {
      this.errorMessage = 'Invalid Email or Password';
    }
  });
}
}