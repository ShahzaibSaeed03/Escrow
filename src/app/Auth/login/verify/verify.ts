import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  imports: [RouterLink, FormsModule],
  templateUrl: './verify.html',
  styleUrls: ['./verify.css']
})
export class Verify {
  code: string[] = ['', '', '', '', '', ''];

  // computed property to check completeness
  get isComplete(): boolean {
    return this.code.every(c => c !== '');
  }
}
