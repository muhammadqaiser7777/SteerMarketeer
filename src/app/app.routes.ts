import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Affiliates } from './pages/affiliates/affiliates';
import { Advertisers } from './pages/advertisers/advertisers';
import { BlogComponent } from './pages/blogs/blogs';
import { Faq } from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { PrivacyPolicy } from './layout/policies/privacy-policy/privacy-policy';
import { CompanyPolicy } from './layout/policies/company-policy/company-policy';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'affiliates', component: Affiliates },
  { path: 'advertisers', component: Advertisers },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'company-policy', component: CompanyPolicy },
  { path: '**', redirectTo: '' }
];
