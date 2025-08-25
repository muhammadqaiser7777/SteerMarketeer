// src/app/pages/services/services.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  services = [
    { title: 'Lead Generation', description: 'We provide quality leads...', image: 'service1.jpg' },
    { title: 'Affiliate Marketing', description: 'Grow your business...', image: 'service2.jpg' },
    { title: 'Campaign Management', description: 'Optimize ROI...', image: 'service3.jpg' }
  ];
}
