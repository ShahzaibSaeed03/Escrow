import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type LogColor = 'yellow' | 'red' | 'teal' | 'sky' | 'gray';

interface ActivityLogItem {
  id: string;
  title: string;
  description: string;
  timestamp: string; // ISO string
  color: LogColor;
}

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log.html',
  styleUrls: ['./log.css']
})
export class Log {
  logs: ActivityLogItem[] = [
    {
      id: '1',
      title: 'Payment Released',
      description:
        'Client approved milestone and released payment. Funds transferred to contractor securely.',
      timestamp: '2024-01-14T10:00:00Z',
      color: 'yellow',
    },
    {
      id: '2',
      title: 'Contractor Submitted Work',
      description:
        'Work for “Shell Construction” phase submitted for review including images and report.',
      timestamp: '2024-01-14T10:30:00Z',
      color: 'red',
    },
    {
      id: '3',
      title: 'Project Updated',
      description:
        'Project timeline adjusted after client feedback. New expected completion date assigned.',
      timestamp: '2024-01-14T12:00:00Z',
      color: 'teal',
    },
    {
      id: '4',
      title: 'Document Uploaded',
      description:
        'Permit and layout drawings uploaded to project files by contractor.',
      timestamp: '2024-01-14T14:00:00Z',
      color: 'sky',
    },
    {
      id: '5',
      title: 'Project Created',
      description:
        'Project initialized successfully by client “John Doe”. Basic details and payment plan added.',
      timestamp: '2024-01-14T15:00:00Z',
      color: 'gray',
    },
  ];

  // Map color to Tailwind class
  colorClass(c: LogColor) {
    const map: Record<LogColor, string> = {
      yellow: 'bg-yellow-400',
      red: 'bg-red-500',
      teal: 'bg-teal-400',
      sky: 'bg-sky-400',
      gray: 'bg-gray-400',
    };
    return map[c];
  }

  formatDate(iso: string) {
    const d = new Date(iso);
    const date = d.toLocaleDateString('en-GB'); // 14/01/2024
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `${date.replace(/\//g, '-')} ${time}`;
  }

  trackById = (_: number, log: ActivityLogItem) => log.id;
}
