import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignIn {
  formModel = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    // here you can call API to check credentials
    // if success → navigate
    this.router.navigate(['/verify']);
  }
}
