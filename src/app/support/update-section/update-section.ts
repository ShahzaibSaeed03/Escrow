import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ReleaseCard = {
  slug: string;        
  version: string;   
  date: string;       
  updates: number;     
  bugfixes?: number;  
  summary: string;    
};

@Component({
  selector: 'app-update-section',
  imports: [CommonModule, RouterLink],
  templateUrl: './update-section.html',
  styleUrls: ['./update-section.css']
})
export class UpdateSection {
  heading = 'User Manual';

  releases: ReleaseCard[] = [
    {
      slug: 'v1-2',
      version: 'Version 1.2',
      date: '08-11-2024',
      updates: 5,
      bugfixes: 2,
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus,...'
    },
    {
      slug: 'v1-1',
      version: 'Version 1.1',
      date: '08-11-2024',
      updates: 5,
      summary: 'Mauris placerat lorem purus, sed egestas sapien euismod sit amet. Vestibulum...'
    },
    {
      slug: 'v1-0-5',
      version: 'Version 1.0.5',
      date: '08-11-2024',
      updates: 5,
      summary: 'Bug fixes and minor improvements for stability and performance...'
    },
    {
      slug: 'v1-0-4',
      version: 'Version 1.0.4',
      date: '08-11-2024',
      updates: 5,
      summary: 'UI polish, accessibility tweaks, and small UX refinements...'
    },
    {
      slug: 'v1-0-3',
      version: 'Version 1.0.3',
      date: '08-11-2024',
      updates: 5,
      bugfixes: 2,
      summary: 'Critical fixes in onboarding flow and improvements to notifications...'
    },
    {
      slug: 'v1-0-2',
      version: 'Version 1.0.2',
      date: '08-11-2024',
      updates: 5,
      summary: 'Improvements to file uploads and project sharing experience...'
    }
  ];

  trackByIndex = (i: number) => i;
}
