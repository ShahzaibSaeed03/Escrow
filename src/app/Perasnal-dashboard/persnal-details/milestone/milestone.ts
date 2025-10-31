import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type MilestoneStatus = 'completed' | 'review' | 'waiting';

interface MilestoneItem {
  index: number;         
  total: number;       
  title: string;
  expectedDate: string;   
  amount: number;        
  status: MilestoneStatus;
  completedOn?: string;
  submittedOn?: string;
  summary?: string;
  note?: string;
  requirements?: string[];
  deliverables?: string[];
  images?: string[];
}

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone.html',
  styleUrls: ['./milestone.css'],
})
export class Milestone {

  // ===== DATA FROM TS =====
  milestones: MilestoneItem[] = [
    {
      index: 1, total: 3, title: 'Demolition & preparation',
      expectedDate: '2024-02-14', amount: 5000, status: 'completed',
      completedOn: '2024-02-14', note: 'Paid out: €5,000'
    },
    {
      index: 2, total: 3, title: 'Shell construction',
      expectedDate: '2024-02-14', amount: 5000, status: 'review',
      submittedOn: '2024-02-14',
      summary: 'New pipes installed, walls placed according to drawing.',
      requirements: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Fusce auctor justo massa, eget vehicula massa sagittis et',
        'Maecenas mattis massa pharetra egestas varius. Sed rhoncus sit amet mauris eget facilisis',
        'Nam id gravida lectus'
      ],
      deliverables: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Fusce auctor justo massa, eget vehicula massa sagittis et',
        'Maecenas mattis massa pharetra egestas varius. Sed rhoncus sit amet mauris eget facilisis',
        'Nam id gravida lectus'
      ],
      images: [
        '/assets/Rectangle 6.png',
        '/assets/Img-2.png'
      ]
    },
    {
      index: 3, total: 3, title: 'Finishing & delivery',
      expectedDate: '2024-02-14', amount: 5000, status: 'waiting'
    }
  ];

  // ===== UI STATE =====
  showReviewModal = false;
  showApproveModal = false;
  activeMilestone: MilestoneItem | null = null;

  // open review modal from “For Review” card box
  openReview(m: MilestoneItem) {
    this.activeMilestone = m;
    this.showReviewModal = true;
    this.showApproveModal = false;
    // prevent background scroll
    document.documentElement.style.overflow = 'hidden';
  }

  closeReview() {
    this.showReviewModal = false;
    this.showApproveModal = false;
    this.activeMilestone = null;
    document.documentElement.style.overflow = '';
  }

  // open approve confirmation on top of review modal
  openApproveConfirm() {
    this.showApproveModal = true;
  }

  // cancel approve popup (keep review modal open)
  cancelApprove() {
    this.showApproveModal = false;
  }

  // proceed approval (example only)
  proceedApprove() {
    if (this.activeMilestone) {
      // mark it completed (demo)
      this.activeMilestone.status = 'completed';
      this.activeMilestone.completedOn = new Date().toISOString();
      this.activeMilestone.note = `Paid out: €${this.activeMilestone.amount.toLocaleString()}`;
    }
    // close both modals
    this.closeReview();
  }

  // ===== Helpers for classes/text =====
  statusPillText(s: MilestoneStatus) {
    if (s === 'completed') return 'Completed';
    if (s === 'review')    return 'For Review';
    return 'Waiting';
  }

  statusPillClass(s: MilestoneStatus) {
    switch (s) {
      case 'completed':
        return 'text-[13px] px-3 py-1 border border-green-300 bg-green-50 text-green-700 rounded-md font-medium';
      case 'review':
        return 'text-[13px] px-3 py-1 border border-amber-300 bg-amber-50 text-amber-700 rounded-md font-medium';
      default:
        return 'text-[13px] px-3 py-1 border border-gray-300 bg-gray-100 text-gray-600 rounded-md font-medium';
    }
  }

  boxClass(s: MilestoneStatus) {
    switch (s) {
      case 'completed':
        return 'mt-4 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700';
      case 'review':
        return 'mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-gray-700 cursor-pointer';
      default:
        return 'mt-4 bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600';
    }
  }

  cardClass(s: MilestoneStatus) {
    return s === 'completed'
      ? 'border border-gray-100 rounded-xl p-5 mb-4 bg-gray-50'
      : 'border border-gray-100 rounded-xl p-5 mb-4';
  }

  trackByIndex = (_: number, m: MilestoneItem) => m.index;

  // ESC closes modals
  @HostListener('window:keydown.escape')
  onEsc() { 
    if (this.showApproveModal) { this.cancelApprove(); return; }
    if (this.showReviewModal) { this.closeReview(); }
  }
}
