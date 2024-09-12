import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected to 'styleUrls'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const loginData = { username: email, password };

      this.http.post('https://dev-cc.automateazy.com/api/v1/users/auth', loginData)
        .subscribe({
          next: (response: any) => {
            if (response.status) {
              // Save token to local storage
              localStorage.setItem('authToken', response.result.token);

              // Navigate to Leads Page
              this.router.navigate(['/leads']);
            } else {
              this.loginError = 'Incorrect email or password.';
            }
          },
          error: () => {
            this.loginError = 'An error occurred. Please try again.';
          }
        });
    } else {
      this.loginError = "Invalid form. Please check your input.";
    }
  }
}
