import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OverviewData {
  progress: {
    percent: number;
    milestonesDone: number;
    totalMilestones: number;
  };
  business: {
    name: string;
    address: string;
    verified: boolean;
  };
  planning: {
    start: string;
    deadline: string;
  };
  status: {
    risk: string;
    message: string;
  };
  address: string;
  description: string;
  gallery: string[];
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrls: ['./overview.css'],
})
export class Overview {
  data: OverviewData = {
    progress: {
      percent: 66,
      milestonesDone: 2,
      totalMilestones: 3,
    },
    business: {
      name: 'Bouwbedrijf van der Berg',
      address: 'Hoofdstraat 123, 1234 AB Amsterdam',
      verified: true,
    },
    planning: {
      start: '31-01-2024',
      deadline: '05-01-2024',
    },
    status: {
      risk: 'No Risks',
      message: 'Project loopt volgens planning',
    },
    address: 'Hoofdstraat 123, 1234 AB Amsterdam',
    description:
      'Complete kitchen renovation including new appliances, cabinets and tiling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo massa, eget vehicula massa sagittis et. Maecenas mattis massa pharetra egestas varius. Sed rhoncus sit amet mauris eget facilisis. Praesent porta nunc enim, eget vehicula dui consequat vel.',
    gallery: [
      'assets/Rectangle 6.png',
      'assets/Rectangle 6.png',
      'assets/Rectangle 6.png',
      'assets/Rectangle 6.png',
    ],
  };
}
