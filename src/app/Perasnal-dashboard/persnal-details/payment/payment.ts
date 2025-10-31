import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PaymentRecord {
  id: string;
  type: 'escrow' | 'pending';
  txNumber: string;
  date: string; // ISO format
  deposit?: {
    title: string;
    amount: number;
    method: string;
    reference: string;
  };
  released?: {
    title: string;
    amount: number;
    milestone: string;
  };
  blocked?: {
    title: string;
    amount: number;
    note: string;
  };
  pending?: {
    title: string;
    status: string;
    amount: number;
    tag: string;
  };
}

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css'],
})
export class Payment {
  payments: PaymentRecord[] = [
    {
      id: '1',
      type: 'escrow',
      txNumber: 'TX#12345',
      date: '2024-01-04T14:25:00Z',
      deposit: {
        title: 'Escrow deposit',
        amount: 24000,
        method: 'via iDEAL',
        reference: 'TX#12345',
      },
      released: {
        title: 'Released',
        amount: 4000,
        milestone: 'Milestone 1',
      },
      blocked: {
        title: 'Blocked',
        amount: 20000,
        note: 'In Escrow',
      },
    },
    {
      id: '2',
      type: 'pending',
      txNumber: 'T--586d',
      date: '2024-01-05T09:10:00Z',
      pending: {
        title: 'Release Milestone 2',
        status: 'Pending approval',
        amount: 15000,
        tag: 'Pending payments',
      },
    },
  ];

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    const date = d.toLocaleDateString('en-GB').replace(/\//g, '-');
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `${date} ${time}`;
  }

  formatCurrency(amount: number): string {
    return `€${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
  }

  trackById = (_: number, record: PaymentRecord) => record.id;
}
