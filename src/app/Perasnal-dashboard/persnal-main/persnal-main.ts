import { Component } from '@angular/core';
import { PersnalHeader } from "../persnal-header/persnal-header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-persnal-main',
  imports: [PersnalHeader, RouterOutlet],
  templateUrl: './persnal-main.html',
  styleUrl: './persnal-main.css'
})
export class PersnalMain {

}
