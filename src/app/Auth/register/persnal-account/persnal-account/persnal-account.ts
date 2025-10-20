import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persnal-account',
  imports: [CommonModule, FormsModule],
  templateUrl: './persnal-account.html',
  styleUrls: ['./persnal-account.css']
})
export class PersnalAccount {
  methodSelected: 'idin' | 'manual' | null = null;

  constructor(private router: Router) {}

  onMethodChange() {
    console.log('methodSelected changed to:', this.methodSelected);
  }

  onBack() {
    window.history.back();
  }

  onNext() {
    if (!this.methodSelected) return;

    const url =
      this.methodSelected === 'idin'
        ? '/idin-registration'
        : '/manual-registration';

    console.log('Navigating to:', url);
    this.router.navigateByUrl(url);
  }
}
