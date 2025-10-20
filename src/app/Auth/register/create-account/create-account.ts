import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-account',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {
  selectedAccount: string | null = null;
constructor(private router: Router) {}

  onNext() {
    if (!this.selectedAccount) return;
    // Both go to the same route; pass the choice if you want
    this.router.navigate(['/persnal-account'], {
      queryParams: { type: this.selectedAccount } // optional
    });
  }
}
