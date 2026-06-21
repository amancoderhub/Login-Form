import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup ;

  constructor(){
  }

  private formbuilder = inject(FormBuilder);
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
      console.log('Form Values:', this.loginForm.value);

      this.loginForm.reset();
  }
}