import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

type UserProfile = {
  name: string;
  email: string;
  lastLogin: string; // display-ready string
};

@Component({
  selector: 'app-persnal-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './persnal-header.html',
  styleUrls: ['./persnal-header.css']
})
export class PersnalHeader {
  constructor(private host: ElementRef<HTMLElement>) {}

  
  user: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@mail.com',
    lastLogin: '14-10-2025 14:23'
  };

  isOpen = false;

  togglePopup(event?: MouseEvent) {
    event?.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  closePopup() {
    this.isOpen = false;
  }


  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    if (!this.isOpen) return;
    const target = ev.target as Node;
    if (!this.host.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.isOpen = false;
  }

  signOut() {
    console.log('Sign out clicked');
    this.isOpen = false;
  }
}
