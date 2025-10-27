import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ManualSection =
  | { type: 'paragraph'; heading: string; body: string }
  | { type: 'list'; heading: string; items: string[] };

@Component({
  selector: 'app-user-manual-deatils',
  imports: [CommonModule, NgIf, NgFor, DatePipe],
  templateUrl: './user-manual-deatils.html',
  styleUrls: ['./user-manual-deatils.css']
})
export class UserManualDeatils {
  // Top meta (show in the info row)
  readTime = '10 min';
  includesVideo = true;
  // Use a Date so you can localize/format easily with DatePipe
  updatedAt: Date = new Date('2024-11-15T00:00:00');

  // Title + subtitle
  title = 'Aan de slag';
  subtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus, et posuere est suscipit eu';

  // Sections (exact text from your HTML)
  sections: ManualSection[] = [
    {
      type: 'paragraph',
      heading: '1. Welkom bij App-Solid',
      body:
        'App-Solid is een uitgebreide oplossing voor het beheer van bouwplaatsinspecties. Met dit systeem kunt u projecten beheren, inspecties plannen, klanten en aannemers beheren, en gebruikersrollen configureren. Deze handleiding helpt u om vertrouwd te raken met de basisconcepten en functies van het systeem.'
    },
    {
      type: 'list',
      heading: '2. Uw eerste login',
      items: ['Actieve projecten', 'Geplande inspecties', 'Recente activiteiten', 'Systeemmeldingen']
    },
    {
      type: 'paragraph',
      heading: '3. Welkom bij App-Solid',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lorem purus, et posuere est suscipit eu. Phasellus elit urna, laoreet eu velit quis, interdum laoreet massa. Cras nec urna nec tellus sagittis euismod in quis nibh. Suspendisse dignissim sapien mi, id scelerisque est pellentesque fermentum. Suspendisse tortor risus, suscipit a mi, a cursus tempor ante. Maecenas ullamcorper leo ut felis viverra mattis eget nec risus. Morbi rhoncus, nisl et viverra porta, mauris log sagittis elit, id luctus mauris velit in odio.'
    }
  ];

  goBack() {
    history.back();
  }

  playVideo() {
    // Hook up your modal/player here (YouTube/Vimeo/custom).
    // For now this is just a stub.
    console.log('Play help video…');
  }
}
