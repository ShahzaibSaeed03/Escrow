import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersnalHeader } from '../../Perasnal-dashboard/persnal-header/persnal-header';

type UserProfile = {
  name: string;
  email: string;
  phone: string;
  address: string;
  lastOnline: Date;
  joined: Date;
  language: { code: string; label: string; flag: string };
};

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, PersnalHeader],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  user: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@mail.com',
    phone: '+31 6 1234 5678',
    address: 'Hoofdstraat 123, 1234 AB Amsterdam',
    lastOnline: new Date('2025-08-24T14:33:00'),
    joined: new Date('2025-08-02T09:48:00'),
    language: {
      code: 'en',
      label: 'EN - English',
      flag: 'https://flagcdn.com/w20/gb.png'
    }
  };

  signOut() {
    // TODO: clear auth and route to login
    console.log('Sign Out');
  }

  editProfile() {
    // TODO: navigate to edit page
    console.log('Edit Profile');
  }
}
