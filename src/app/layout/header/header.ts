import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule], // <-- this enables routerLink, routerLinkActive, routerLinkActiveOptions
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
}
