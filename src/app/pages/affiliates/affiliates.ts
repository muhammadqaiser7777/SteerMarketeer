import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affiliates',
  standalone: true,
  templateUrl: './affiliates.html',
  styleUrls: ['./affiliates.css'],
  imports: [CommonModule]
})
export class Affiliates implements AfterViewInit, OnDestroy {
  swiper?: Swiper;

  cards = [
    {
      img: 'assets/images/affiliates/real-time-tracking.jpg',
      title: 'Real-Time Tracking',
      desc: 'Monitor your performance and earnings with our advanced real-time tracking tools.'
    },
    {
      img: 'assets/images/affiliates/high-payouts.jpg',
      title: 'High Payouts',
      desc: 'Enjoy industry-leading commissions and timely payments for your efforts.'
    },
    {
      img: 'assets/images/affiliates/variety-offers.jpg',
      title: 'Variety of Offers',
      desc: 'Promote top converting offers across multiple verticals and geos.'
    },
    {
      img: 'assets/images/affiliates/dedicated-support.jpg',
      title: 'Dedicated Support',
      desc: 'Get personalized assistance from our experienced affiliate managers.'
    },
    {
      img: 'assets/images/affiliates/fast-payments.jpg',
      title: 'Fast Payments',
      desc: 'Receive your earnings quickly and securely with multiple payment options.'
    },
    {
      img: 'assets/images/affiliates/advanced-tools.jpg',
      title: 'Advanced Tools',
      desc: 'Access a suite of tools to optimize your campaigns and maximize ROI.'
    }
  ];

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  initCarousel() {
    this.swiper = new Swiper('.process-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 16,
      speed: 700,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 }
      }
    });
  }
}
