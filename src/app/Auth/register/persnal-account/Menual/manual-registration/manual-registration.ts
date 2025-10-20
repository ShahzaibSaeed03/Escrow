import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-manual-registration',
  imports: [RouterLink],
  templateUrl: './manual-registration.html',
  styleUrl: './manual-registration.css'
})
export class ManualRegistration {
 onBack() {
    window.history.back();
  }
}
