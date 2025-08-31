import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousal } from '../../layout/carousal/carousal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Carousal],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  showBackToTop = false;

  @ViewChild('scrollProgress', { static: false }) scrollProgress!: ElementRef<HTMLDivElement>;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.showBackToTop = scrollY > 400;

    if (this.scrollProgress) {
      const doc = document.documentElement;
      const scrolled = (scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      this.scrollProgress.nativeElement.style.width = `${scrolled}%`;
    }
  }

  ngAfterViewInit() {
    // Scroll reveal for elements
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal, app-carousal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset['delay']
              ? parseInt(el.dataset['delay']!, 10)
              : el.tagName === 'APP-CAROUSAL'
              ? 300
              : 0;

            setTimeout(() => el.classList.add('in-view'), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(el => observer.observe(el));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
