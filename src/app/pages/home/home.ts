import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousal } from '../../layout/carousal/carousal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Carousal],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  encapsulation: ViewEncapsulation.None, 
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
  this.initBackToTop();

  // Force carousel to be visible immediately
  const carousel = document.querySelector<HTMLElement>('app-carousal');
  if (carousel) {
    carousel.style.opacity = '1';
    carousel.style.transform = 'none';
  }

  // Reveal logic for other elements
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset['delay'] ? parseInt(el.dataset['delay']!, 10) : 0;
          setTimeout(() => el.classList.add('in-view'), delay);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach(el => observer.observe(el));
}


  initBackToTop() {
    const backToTopBtn = document.querySelector<HTMLElement>('.back-to-top');
    if (!backToTopBtn) return;

    const onScroll = () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
