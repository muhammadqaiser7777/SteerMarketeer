import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  navLinks = [
    { path: '', label: 'Home', exact: true },
    { path: 'about', label: 'About', exact: false },
    { path: 'affiliates', label: 'Affiliates', exact: false },
    { path: 'advertisers', label: 'Advertisers', exact: false },
    { path: 'contact', label: 'Contact', exact: false },
    { path: 'blog', label: 'Blog', exact: false },
    { path: 'faq', label: 'FAQ', exact: false },
  ];

  menuOpen = false;

  constructor(private router: Router) {
    // Only close menu on route change if menu is open (mobile)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.menuOpen) {
        setTimeout(() => {
          this.menuOpen = false;
        }, 100); // slight delay for smoother UX
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
