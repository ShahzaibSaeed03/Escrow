import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,
  Validators, FormArray, FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

type Step = 1 | 2 | 3 | 4;
type Role = 'payer' | 'receiver';

interface Contractor {
  id: string;
  name: string;
  email: string;
  verified: boolean;
}

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-project.html',
  styleUrls: ['./create-project.css'],
})
export class CreateProject implements OnInit, OnDestroy {
  // ---------- STEPS ----------
  steps: Step[] = [1, 2, 3, 4];
  private _step: Step = 1;
  get step(): Step { return this._step; }
  isActiveN(s: Step) { return this._step === s; }
  isCompletedN(s: Step) { return this._step > s; }
  canGoToStepN(s: Step) { return s === 1 || this.isCompletedN((s - 1) as Step); }
  onStepClickN(s: Step) { if (this.canGoToStepN(s)) this.goToStep(s); }
  goToStep(s: Step) { this._step = s; }

  next() {
    // Step 1 blocking validation
    if (this._step === 1) {
      const step1Keys = ['title', 'address', 'description', 'startDate', 'endDate'];
      let invalid = false;
      step1Keys.forEach(k => {
        const c = this.projectForm.get(k);
        if (c) {
          c.markAsTouched();
          c.updateValueAndValidity();
          if (c.invalid) invalid = true;
        }
      });
      if (invalid) return;
    }

    // Step 2 blocking validation
    if (this._step === 2) {
      if (this.paymentTab === 'milestone') {
        this.milestones.markAllAsTouched();
        if (this.milestones.invalid) return;
      } else {
        const single = this.payment.get('single') as FormGroup;
        single.markAllAsTouched();
        if (single.invalid) return;
      }
    }

    // Step 3 blocking validation
    if (this._step === 3) {
      const mode = this.link.get('mode')?.value as 'specific' | 'invite';
      if (mode === 'specific') {
        if (!this.link.get('selected')?.value) {
          this.link.markAllAsTouched();
          return;
        }
      } else {
        const e = this.link.get('inviteEmail');
        e?.markAsTouched();
        if (!e?.value || e.invalid) return;
      }
    }

    if (this._step < 4) this._step = (this._step + 1) as Step;
  }

  back() {
    if (this._step > 1) this._step = (this._step - 1) as Step;
  }
// Dark/Light tokens for connectors
private readonly lineDark = 'bg-sky-500';
private readonly lineLight = 'bg-gray-200';

dotClass(s: Step) {
  // completed: solid sky-500
  if (this.isCompletedN(s)) {
    return 'bg-sky-500 border-sky-500 text-white';
  }
  // active: light bg with sky ring
  if (this.isActiveN(s)) {
    return 'bg-sky-100 border-sky-400 ring-2 ring-sky-300';
  }
  // upcoming
  return 'bg-gray-200 border-gray-300';
}

/** connector above this dot (to previous) */
topLineClass(s: Step) {
  // If previous step is completed or we're currently at/after this step -> dark
  // s-1 is completed when current step index > (s-1)
  const prevCompleted = (this.step as number) >= (s as number);
  return prevCompleted ? this.lineDark : this.lineLight;
}

/** connector below this dot (to next) */
bottomLineClass(s: Step) {
  // If this step is completed -> dark
  if (this.isCompletedN(s)) return this.lineDark;
  // If this is the active step -> show light below
  if (this.isActiveN(s)) return this.lineLight;
  // Upcoming
  return this.lineLight;
}

  // ---------- ROLE ----------
  private _role: Role = 'payer';
  role(): Role { return this._role; }
  setRole(r: Role) { this._role = r; }
  roleText(): string { return this._role === 'payer' ? "I'm paying" : "I'm receiving the payment"; }

  // ---------- FORM ----------
  projectForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.projectForm = this.fb.group({
      // Step 1
      title: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      attachments: [[] as File[]],

      // Step 2: Payment
      payment: this.fb.group({
        type: new FormControl<'milestone' | 'single'>('milestone', { nonNullable: true }),
        milestones: this.fb.array([ this.createMilestone() ]),
        single: this.fb.group({
          amount: [null, [Validators.required, Validators.min(0.01)]],
        }),
      }),

      // Step 3: Link Contractor (data-driven)
      link: this.fb.group({
        mode: new FormControl<'specific' | 'invite'>('specific', { nonNullable: true }),
        filterType: new FormControl<'email' | 'id'>('email', { nonNullable: true }),
        query: [''],
        selected: this.fb.control<Contractor | null>(null),
        inviteEmail: ['', [Validators.email]],
      }),

      // Step 4: Agreement
      agreeTerms: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
    // Prefill example for Step 1
    this.projectForm.patchValue({
      title: 'Kitchen Renovation',
      address: '123 Main Street, Lahore',
      description: 'Full kitchen remodel with cabinets, flooring and lighting.',
    });

    // keep Step-2 tab in sync
    this.paymentTab = (this.payment.get('type')?.value ?? 'milestone') as 'milestone' | 'single';
  }

  // ---------- FILES + PREVIEWS ----------
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  private previewMap = new WeakMap<File, string>();

  triggerFile() { this.fileInput.nativeElement.click(); }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onFilesSelected(input.files);
  }

  onFilesSelected(files: FileList | null) {
    if (!files || files.length === 0) return;
    const picked = Array.from(files);
    const existing: File[] = this.projectForm.value.attachments || [];
    const nextList = [...existing, ...picked];
    this.projectForm.patchValue({ attachments: nextList });

    if (this.fileInput?.nativeElement) this.fileInput.nativeElement.value = '';
  }

  isImage(file: File) { return file.type.startsWith('image/'); }

  getPreview(file: File): string {
    let url = this.previewMap.get(file);
    if (!url) { url = URL.createObjectURL(file); this.previewMap.set(file, url); }
    return url;
  }

  removeFile(index: number) {
    const list: File[] = [...(this.projectForm.value.attachments || [])];
    const removed = list.splice(index, 1)[0];
    this.projectForm.patchValue({ attachments: list });

    if (removed) {
      const url = this.previewMap.get(removed);
      if (url) { URL.revokeObjectURL(url); this.previewMap.delete(removed); }
    }
  }

  ngOnDestroy(): void {
    const files: File[] = this.projectForm.value.attachments || [];
    for (const f of files) {
      const url = this.previewMap.get(f);
      if (url) URL.revokeObjectURL(url);
    }
  }

  // ---------- SUBMIT ----------
submit() {
  const agree = this.projectForm.get('agreeTerms');
  if (!agree?.value) {
    agree?.markAsTouched();
    return;
  }

  if (this.projectForm.invalid) {
    this.projectForm.markAllAsTouched();
    this.goToStep(1);
    return;
  }

  const payload = {
    role: this._role,
    ...this.projectForm.value,
  };

  console.log('Submit payload:', payload);

  // show success message (optional)
  alert('Project created successfully! Redirecting...');

  // redirect to personal dashboard
  this.router.navigate(['/persnal-dashboard/dashboard']);
}


  // ---------- STEP 2: Payment tabs ----------
  paymentTab: 'milestone' | 'single' = 'milestone';
  setPaymentTab(tab: 'milestone' | 'single') {
    this.paymentTab = tab;
    this.payment.get('type')?.setValue(tab);
  }
  isMilestoneTab() { return this.paymentTab === 'milestone'; }
  isSingleTab()    { return this.paymentTab === 'single'; }

  // ---------- STEP 2: Payment form helpers ----------
  get payment(): FormGroup {
    return this.projectForm.get('payment') as FormGroup;
  }

  get milestones(): FormArray {
    return this.payment.get('milestones') as FormArray;
  }

  createMilestone(): FormGroup {
    return this.fb.group({
      title:        ['', [Validators.required, Validators.minLength(3)]],
      description:  [''],
      amount:       [null, [Validators.required, Validators.min(0.01)]],
      expectedDate: [''], // yyyy-MM-dd
      requirements: this.fb.array([ this.fb.control('') ]),
      deliverables: this.fb.array([ this.fb.control('') ]),
    });
  }

  addMilestone() { this.milestones.push(this.createMilestone()); }
  removeMilestone(i: number) {
    if (this.milestones.length > 1) this.milestones.removeAt(i);
  }

  reqArray(i: number): FormArray {
    return this.milestones.at(i).get('requirements') as FormArray;
  }
  delArray(i: number): FormArray {
    return this.milestones.at(i).get('deliverables') as FormArray;
  }

  addRequirement(mi: number) { this.reqArray(mi).push(this.fb.control('')); }
  removeRequirement(mi: number, idx: number) {
    const arr = this.reqArray(mi); if (arr.length > 1) arr.removeAt(idx);
  }
  addDeliverable(mi: number) { this.delArray(mi).push(this.fb.control('')); }
  removeDeliverable(mi: number, idx: number) {
    const arr = this.delArray(mi); if (arr.length > 1) arr.removeAt(idx);
  }

  totalMilestonesAmount(): number {
    return (this.milestones.value as any[]).reduce((sum, m) => sum + (+m.amount || 0), 0);
  }
  singleAmount(): number {
    return +(this.payment.get('single.amount')?.value || 0);
  }
  paymentType(): 'milestone' | 'single' {
    return (this.payment.get('type')?.value ?? 'milestone') as 'milestone' | 'single';
  }

  // ---------- STEP 3: Link Contractor ----------
  get link(): FormGroup { return this.projectForm.get('link') as FormGroup; }

  contractors: Contractor[] = [
    { id: '9798798', name: 'John Doe',     email: 'john.doe@example.com',     verified: true  },
    { id: '8834211', name: 'Jane Smith',   email: 'jane.smith@example.com',   verified: false },
    { id: '4412990', name: 'Mark Johnson', email: 'mark.johnson@example.com', verified: true  },
    { id: '6628451', name: 'Emily Watson', email: 'emily.watson@example.com', verified: false },
  ];

  get filterType(): 'email' | 'id' {
    return this.link.get('filterType')?.value as 'email' | 'id';
  }

  setFilterType(ft: 'email' | 'id') {
    this.link.patchValue({ filterType: ft, query: '', selected: null });
  }

  onQueryInput(val: string) {
    this.link.get('query')?.setValue(val);
    this.link.get('selected')?.setValue(null);
  }

  get filteredContractors(): Contractor[] {
    const q = (this.link.get('query')?.value || '').toString().trim().toLowerCase();
    const mode = this.filterType;
    if (!q) return [];
    return this.contractors.filter(c =>
      mode === 'email'
        ? c.email.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
        : c.id.toLowerCase().includes(q)   || c.name.toLowerCase().includes(q)
    );
  }

  selectContractor(c: Contractor) {
    this.link.get('selected')?.setValue(c);
    const show = this.filterType === 'email' ? c.email : c.id;
    this.link.get('query')?.setValue(show);
  }

  badgeClass(verified: boolean) {
    return verified
      ? 'inline-flex items-center px-3 py-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg'
      : 'inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg';
  }
}
