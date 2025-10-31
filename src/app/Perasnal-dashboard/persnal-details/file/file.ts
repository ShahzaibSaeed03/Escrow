import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FileKind = 'image' | 'pdf' | 'doc' | 'other';

interface ProjectFileItem {
  id: string;
  name: string;        // e.g. "kitchen-angle-a.png"
  kind: FileKind;      // image | pdf | doc | other
  url: string;         // where to open/download
  thumb?: string;      // for images; can reuse url
  sizeMB: number;      // 2.3
  uploadedAt: string;  // ISO date string
}

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file.html',
  styleUrls: ['./file.css'],
})
export class File {
  // ====== SAMPLE DATA FROM TS ======
  files: ProjectFileItem[] = [
    {
      id: 'f1',
      name: 'kitchen-overview.png',
      kind: 'image',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
      sizeMB: 2.3,
      uploadedAt: '2024-02-14T10:34:00Z',
    },
    {
      id: 'f2',
      name: 'permit-drawing.pdf',
      kind: 'pdf',
      url: 'https://example.com/files/permit-drawing.pdf',
      sizeMB: 2.3,
      uploadedAt: '2024-02-14T10:34:00Z',
    },
    {
      id: 'f3',
      name: 'sink-detail.jpg',
      kind: 'image',
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
      thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600',
      sizeMB: 1.8,
      uploadedAt: '2024-02-14T10:34:00Z',
    },
    {
      id: 'f4',
      name: 'invoice-02.pdf',
      kind: 'pdf',
      url: 'https://example.com/files/invoice-02.pdf',
      sizeMB: 0.9,
      uploadedAt: '2024-02-14T10:34:00Z',
    },
  ];
f: any;

  // ====== HELPERS ======
  isImage(f: ProjectFileItem) {
    return f.kind === 'image';
  }

  // Format: "Uploaded 14-02-2024 10:34"
  uploadedLabel(f: ProjectFileItem): string {
    const d = new Date(f.uploadedAt);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `Uploaded ${dd}-${mm}-${yyyy} ${hh}:${min}`;
  }

  sizeLabel(f: ProjectFileItem) {
    return `${f.sizeMB.toFixed(1)} MB`;
  }

  // Download/open
  download(f: ProjectFileItem) {
    // If you want a forced download, create an <a download> dynamically:
    const a = document.createElement('a');
    a.href = f.url;
    a.download = f.name;
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
