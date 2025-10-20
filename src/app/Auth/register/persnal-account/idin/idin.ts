import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-idin',
  imports: [CommonModule, RouterLink],
  templateUrl: './idin.html',
  styleUrl: './idin.css'
})
export class Idin {
  onBack() {
    window.history.back();
  }
}
