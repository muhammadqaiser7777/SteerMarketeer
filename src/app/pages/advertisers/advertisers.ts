import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousal } from '../../layout/carousal/carousal';

@Component({
  selector: 'app-advertisers',
  standalone: true,
  templateUrl: './advertisers.html',
  styleUrls: ['./advertisers.css'],
  imports: [CommonModule, Carousal] // ✅ include carousel
})
export class Advertisers implements AfterViewInit, OnDestroy {


  ngAfterViewInit(): void {
    this.initScrollReveal();
    this.initCounters();
    this.initBackToTop();
  }

  ngOnDestroy(): void {}

  // ✅ Scroll Reveal
  initScrollReveal() {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll();
  }

  // ✅ Counter Animation
  initCounters() {
    const counters = document.querySelectorAll<HTMLElement>('.advertiser-stat-number');

    const runCounter = (counter: HTMLElement) => {
      counter.innerText = '0';
      const targetAttr = counter.getAttribute('data-target');
      if (!targetAttr) return;

      const target = +targetAttr;
      const increment = Math.max(1, Math.floor(target / 100));

      const update = () => {
        const current = +counter.innerText.replace(/,/g, '');
        if (current < target) {
          const next = Math.min(target, current + increment);
          counter.innerText = next.toLocaleString();
          setTimeout(update, 15);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      update();
    };

    const handleScroll = () => {
      counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (
          rect.top < windowHeight &&
          rect.bottom > 0 &&
          !counter.classList.contains('counted')
        ) {
          counter.classList.add('counted');
          runCounter(counter);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ✅ Back to Top
  initBackToTop() {
    const backToTopBtn = document.querySelector<HTMLElement>('.advertiser-back-to-top');
    if (!backToTopBtn) return;

    const onScroll = () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
