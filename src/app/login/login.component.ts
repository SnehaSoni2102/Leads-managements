import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router  // Inject Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simulate a login check (replace with actual authentication logic)
      if (email === 'interviewassignment@gmail.com' && password === 'Automateazy@123') {
        console.log('Login successful');
        this.loginError = false;  // Reset the error flag on successful login

        // Navigate to Leads Page
        this.router.navigate(['/leads']);  // Adjust the path as needed
      } else {
        console.log('Login failed');
        this.loginError = true;  // Set the error flag on failed login
      }
    } else {
      console.log('Form is not valid');
      this.loginError = false;  // Optionally reset the error flag
    }
  }
}
