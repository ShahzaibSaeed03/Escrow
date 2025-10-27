import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

type ManualCard = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;           // e.g., "12 min"
  icon: 'doc' | 'shield' | 'folder' | 'badge' | 'users' | 'wrench' | 'gear' | 'clock';
  cta?: { text: string; href?: string; routerLink?: any[] }; // optional special CTA (last card)
};

@Component({
  selector: 'app-user-manual',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-manual.html',
  styleUrls: ['./user-manual.css']
})
export class UserManual {
  heading = 'User Manual';

  cards: ManualCard[] = [
    {
      slug: 'plan-inspections',
      title: 'Inspecties plannen',
      readTime: '12 min',
      icon: 'doc',
      excerpt: 'Leer hoe je inspecties plant, bewerkt en beheert binnen het platform...'
    },
    {
      slug: 'secure-payments',
      title: 'Veilige betalingen',
      readTime: '9 min',
      icon: 'shield',
      excerpt: 'Zo werkt Escrow-betaling: mijlpalen, vrijgaven en terugbetalingen...'
    },
    {
      slug: 'project-folders',
      title: 'Projectmappen beheren',
      readTime: '8 min',
      icon: 'folder',
      excerpt: 'Structuur en mappen: offertes, facturen en foto’s slim organiseren...'
    },
    {
      slug: 'create-project',
      title: 'Nieuw project aanmaken',
      readTime: '7 min',
      icon: 'badge',
      excerpt: 'Stap-voor-stap een nieuw project starten en aannemer uitnodigen...'
    },
    {
      slug: 'teams-and-roles',
      title: 'Teams en rollen',
      readTime: '10 min',
      icon: 'users',
      excerpt: 'Beheer teamleden, rechten en rollen binnen jouw organisatie...'
    },
    {
      slug: 'tools-and-uploads',
      title: 'Tools & uploads',
      readTime: '6 min',
      icon: 'wrench',
      excerpt: 'Bestanden uploaden, versies vergelijken en opmerkingen plaatsen...'
    },
    {
      slug: 'instellingen',
      title: 'Instellingen',
      readTime: '5 min',
      icon: 'gear',
      excerpt: 'Taal, notificaties en persoonlijke voorkeuren instellen...'
    },
    {
      slug: 'contact-support',
      title: 'Contact opnemen',
      readTime: '—',
      icon: 'clock',
      excerpt: 'Heb je hulp nodig? Neem direct contact op met het supportteam.',
      cta: { text: 'Contact opnemen', routerLink: ['/support'] }
    }
  ];

  constructor(private router: Router) {}



  trackByIdx = (i: number) => i;
}
