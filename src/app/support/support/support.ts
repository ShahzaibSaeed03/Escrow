import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type SupportCard = {
  title: string;
  description?: string;
  img: string;
  linkText: string;
  href: string;
};

type Faq = {
  question: string;
  answer: string;
  open?: boolean;
};

@Component({
  selector: 'app-support',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './support.html',
  styleUrls: ['./support.css']
})
export class Support {
  heading = 'Support';

  cards: SupportCard[] = [
    {
      title: 'User manual',
      description: 'Discover how to get started and make the most of the application with our step-by-step user guide.',
      img: 'assets/icon_manual.png',
      linkText: 'View More',
      href: '/persnal-dashboard/user-manual'
    },
    {
      title: 'Updates',
      description: 'Stay up to date with the latest features, improvements, and bug fixes — all in one place.',
      img: 'assets/Icon_updates.png',
      linkText: 'View More',
      href: '/persnal-dashboard/user-updates'
    },
    {
      title: 'Contact Us',
      img: 'assets/icon_communication.png',
      linkText: 'support@escrow.com',
      href: 'mailto:support@escrow.com'
    }
  ];

  contact = {
    emailText: 'support@escrow.com',
    emailHref: 'mailto:support@escrow.com',
    phoneText: '+35 20 313 16',
    phoneHref: 'tel:+352031316',
    hours: 'You can reach us on weekdays between 08:30 - 17:30'
  };

  faqs: Faq[] = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta magna.',
      answer: 'Donec sed metus augue. Curabitur vehicula ornare lacus, vel pulvinar erat faucibus quis.',
      open: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Vivamus efficitur nulla ut blandit semper. Nullam blandit vitae sem at cursus.',
      open: false
    },
    {
      question: 'Pellentesque dapibus rutrum neque, id viverra eros ultrices ut.',
      answer: 'Sed gravida lobortis risus. Sed mattis dolor sit amet sem rhoncus auctor.',
      open: false
    }
  ];

  toggleFaq(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }

  trackByIndex = (_: number, __: unknown) => _;
}
