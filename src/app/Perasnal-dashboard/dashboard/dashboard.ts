import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

type ProjectStatus = 'in-progress' | 'pending' | 'completed';

interface Project {
  name: string;
  contractor: string;
  status: ProjectStatus;
  progress: number;           // 0..100
  milestonesDone: number;
  milestonesTotal: number;
  escrowEUR: number;          // store in EUR
  deadline?: Date | null;     // null/undefined → “Not available”
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NgFor, NgIf, CurrencyPipe, DatePipe,RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  // Top KPI data (could come from API)
  messagesCount = 0;

  // Table data (sample)
  projects: Project[] = [
    {
      name: 'Kitchen renovation',
      contractor: 'van der Berg Construction',
      status: 'in-progress',
      progress: 65,
      milestonesDone: 2,
      milestonesTotal: 3,
      escrowEUR: 40000,
      deadline: new Date('2024-01-31T10:23:00')
    },
    {
      name: 'Kitchen renovation',
      contractor: 'Sanitair Solutions',
      status: 'pending',
      progress: 100,
      milestonesDone: 2,
      milestonesTotal: 2,
      escrowEUR: 40000,
      deadline: null
    },
    {
      name: 'Roof insulation',
      contractor: 'IsolatieXpert',
      status: 'completed',
      progress: 100,
      milestonesDone: 1,
      milestonesTotal: 1,
      escrowEUR: 40000,
      deadline: new Date('2024-01-31T10:23:00')
    }
  ];

  // Derived KPIs
  get activeProjects(): number {
    // treat in-progress as “active”
    return this.projects.filter(p => p.status === 'in-progress').length;
  }

  get approvals(): number {
    // pending approval items
    return this.projects.filter(p => p.status === 'pending').length;
  }

  get escrowBalanceEUR(): number {
    return this.projects.reduce((sum, p) => sum + p.escrowEUR, 0);
  }

  // UI helpers
  statusBadgeClasses(status: ProjectStatus): string {
    switch (status) {
      case 'in-progress':
        return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
    }
  }

  statusLabel(status: ProjectStatus): string {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending Approval';
      case 'completed':
        return 'Completed';
    }
  }
}
