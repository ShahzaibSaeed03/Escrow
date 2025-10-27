import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

type UpdateItem = {
  title: string;
  description: string;
  updates?: number;   
  bugfixes?: number;  
};

type ReleaseDetails = {
  slug: string;
  version: string;    
  date: string;      
  items: UpdateItem[]; 
};

const RELEASES: Record<string, ReleaseDetails> = {
  'v1-2': {
    slug: 'v1-2',
    version: 'Version 1.2',
    date: '08-11-24',
    items: [
      {
        title: 'Nieuwe dashboard widgets',
        description:
          'Toegevoegde aanpasbare widgets voor projectoverzicht en inspectiestatistieken op het dashboard',
        updates: 5,
        bugfixes: 2
      },
      {
        title: 'Verbeterde zoekfunctionaliteit',
        description:
          'Uitgebreide zoekfunctie met filters voor projecten, klanten en aannemers.',
        updates: 5,
        bugfixes: 2
      },
      {
        title: 'Excel export optimalisatie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus',
        updates: 5,
        bugfixes: 2
      },
      {
        title: 'Gebruikersinterface polish',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus',
        updates: 5,
        bugfixes: 2
      },
      {
        title: 'Mobiele inspectie synchronisatie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus',
        updates: 5,
        bugfixes: 2
      }
    ]
  }
};

@Component({
  selector: 'app-update-section-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './update-section-details.html',
  styleUrls: ['./update-section-details.css']
})
export class UpdateSectionDetails {
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  // current release loaded by slug
  release = signal<ReleaseDetails | null>(null);

  // derived meta
  totalUpdates = computed(() =>
    this.release()?.items.reduce((sum, it) => sum + (it.updates ?? 0), 0) ?? 0
  );
  totalBugfixes = computed(() =>
    this.release()?.items.reduce((sum, it) => sum + (it.bugfixes ?? 0), 0) ?? 0
  );

  constructor() {
    this.route.paramMap.subscribe((p) => {
      const slug = p.get('slug') ?? 'v1-2'; 
      this.release.set(RELEASES[slug] ?? null);
    });
  }

  back() {
    if (!document.referrer) {
      this.location.go('/updates');
    }
    this.location.back();
  }

  trackByIdx = (i: number) => i;
}
