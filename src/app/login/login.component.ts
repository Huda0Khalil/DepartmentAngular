import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
[x: string]: any;
  loginForm!: FormGroup;
  submitted = false; 
  hide = true;  errorMessage = '';
constructor(private authService: AuthService,private router: Router,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],  // Username must be at least 3 characters
      password: ['', Validators.required]   // Password must be at least 6 characters
    });
  }
  get f() { return this.loginForm.controls; }

onSubmit(){
  this.submitted = true;

    // If form is invalid, return and show errors
    if (this.loginForm.invalid) {
      return;
    }
  this.authService.login(this.loginForm.value).subscribe({
    
    next:(response)=>{
      
console.log(response);
this.router.navigate(['/departments']); 
    },error:(err)=>{
      this.errorMessage = 'Login failed. Please check your credentials.';

    }
  })
}
}
