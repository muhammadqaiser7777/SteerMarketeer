import { Component, AfterViewInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CommonModule } from '@angular/common';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-carousal',
  standalone: true,
  templateUrl: './carousal.html',
  styleUrls: ['./carousal.css'],
  imports: [CommonModule]
})
export class Carousal implements AfterViewInit, OnDestroy {
  @Input() cards: { img: string; title: string; desc: string }[] = [];
  @ViewChild('swiperRef', { static: true }) swiperRef!: ElementRef<HTMLDivElement>;
  private swiper?: Swiper;

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
  }

  private initCarousel() {
    const host = this.swiperRef.nativeElement;

    this.swiper = new Swiper(host, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 650,
      // 👇 reverse the autoplay flow
      autoplay: {
        delay: 3000,
        reverseDirection: true,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: host.querySelector('.swiper-button-next') as HTMLElement | null,
        prevEl: host.querySelector('.swiper-button-prev') as HTMLElement | null,
      },
      pagination: {
        el: host.querySelector('.swiper-pagination') as HTMLElement | null,
        clickable: true,
      },
      // keep inside container width + responsive counts
      breakpoints: {
        0:   { slidesPerView: 1, spaceBetween: 0  },
        700: { slidesPerView: 2, spaceBetween: 16 },
        1024:{ slidesPerView: 3, spaceBetween: 24 }
      },
      // updates if parent/container changes
      observer: true,
      observeParents: true
    });
  }
}
