import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.css'],
  imports: [CommonModule]
})
export class Faq {
faqs = [
  {
    question: 'WHAT DOES STEER MARKETEER DO?',
    answer:
      'We are both a Direct Advertiser and an Affiliate Marketing Agency specializing in the home improvement and solar energy verticals. We connect advertisers with high-quality, TCPA-compliant leads and affiliates with exclusive offers.',
    open: false
  },
  {
    question: 'HOW DOES YOUR PLATFORM BENEFIT ADVERTISERS?',
    answer:
      'Our platform provides high-quality, verified leads through our own fully managed landing pages. This ensures advertisers maximize ROI with transparency and measurable results.',
    open: false
  },
  {
    question: 'DO YOU WORK WITH BUSINESSES OF ALL SIZES?',
    answer:
      'Yes. Whether you are a startup or an established enterprise, we tailor affiliate marketing and lead generation solutions to fit your growth stage and goals.',
    open: false
  },
  {
    question: 'HOW CAN I ADVERTISE MY BUSINESS WITH STEER MARKETEER?',
    answer:
      'If you are a brand looking to scale, we connect you with top-performing affiliates and publishers in the home improvement and solar niches. Simply reach out to our team, and we will guide you through the onboarding process.',
    open: false
  },
  {
    question: 'WHAT INDUSTRIES DO YOU PROVIDE LEADS FOR?',
    answer:
      'We focus exclusively on home improvement and solar energy verticals, providing high-quality, TCPA-compliant leads in these niches.',
    open: false
  },
  {
    question: 'HOW DO YOU ENSURE LEAD QUALITY?',
    answer:
      'We use strict verification processes, TCPA compliance measures, advanced fraud prevention tools, and data-driven targeting to deliver only high-quality, verified leads.',
    open: false
  },
  {
    question: 'HOW CAN I BECOME AN AFFILIATE WITH STEER MARKETEER?',
    answer:
      'You can join our network by signing up on our website. Once approved, you’ll gain access to exclusive, top-performing offers in the home improvement and solar energy verticals.',
    open: false
  },
  {
    question: 'WHAT TYPE OF OFFERS DO YOU PROVIDE?',
    answer:
      'We operate primarily on a CPL (Cost Per Lead) model with exclusive, in-house offers focused on home improvement and solar energy solutions.',
    open: false
  },
  {
    question: 'WHAT TRAFFIC SOURCES DO YOU ACCEPT?',
    answer:
      'We accept compliant traffic sources such as email marketing (opt-in only), native ads, display campaigns, social media, and SEO.',
    open: false
  },
  {
    question: 'WHEN DO PARTNERS GET PAID?',
    answer:
      'We offer reliable NET 30 payment terms, ensuring smooth and consistent payouts to our traffic partners and affiliates.',
    open: false
  },
  {
    question: 'HOW DO I TRACK MY PERFORMANCE?',
    answer:
      'Our platform provides real-time tracking and detailed reporting, allowing you full visibility into clicks, leads, conversions, and earnings.',
    open: false
  },
  {
    question: 'WHAT KIND OF SUPPORT DO YOU PROVIDE?',
    answer:
      'We provide dedicated affiliate managers and account support to assist with campaign setup, optimization, and troubleshooting.',
    open: false
  },
  {
    question: 'ARE YOUR CAMPAIGNS TCPA COMPLIANT?',
    answer:
      'Yes. All our lead generation is fully TCPA compliant, with strict validation and fraud-prevention systems in place.',
    open: false
  },
  {
    question: 'DO YOU WORK INTERNATIONALLY OR ONLY IN THE USA?',
    answer:
      'Our primary focus is the USA, but we also collaborate with trusted publishers and traffic partners internationally.',
    open: false
  },
  {
    question: 'HOW CAN I CONTACT CUSTOMER SUPPORT?',
    answer:
      'You can reach us anytime through our contact page or by email. Our team is here to help.',
    open: false
  }
];


toggleFAQ(index: number) {
  this.faqs.forEach((f, i) => {
    if (i === index) {
      f.open = !f.open;   // toggle selected
    } else {
      f.open = false;     // close others
    }
  });
}

}