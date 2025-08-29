import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Carousal } from '../../layout/carousal/carousal';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DecimalPipe, Carousal],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  yearsExperience = 15;
  publishers = 5000;
  advertisers = 1000;
  conversionRate = 21;
  guaranteed = 100;

  // Counter animation
  counter(start: number, end: number, duration: number, callback: (val: number) => void) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  ngOnInit() {
    this.counter(0, this.yearsExperience, 2000, val => this.yearsExperience = val);
    this.counter(0, this.publishers, 2000, val => this.publishers = val);
    this.counter(0, this.advertisers, 2000, val => this.advertisers = val);
    this.counter(0, this.conversionRate, 2000, val => this.conversionRate = val);
    this.counter(0, this.guaranteed, 2000, val => this.guaranteed = val);
  }
}
