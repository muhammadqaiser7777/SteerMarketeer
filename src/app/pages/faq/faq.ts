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
        'We specialize in connecting advertisers with high-quality leads and affiliates, helping businesses scale through performance-based marketing.',
      open: false
    },
    {
      question: 'HOW DOES YOUR PLATFORM BENEFIT ADVERTISERS?',
      answer:
        'Our platform provides targeted exposure, analytics, and partnerships that maximize return on investment.',
      open: false
    },
    {
      question: 'DO YOU WORK WITH BUSINESSES OF ALL SIZES?',
      answer:
        'Yes. From startups to enterprises, we tailor solutions to fit your growth stage and goals.',
      open: false
    },
    {
      question: 'How can I advertise my business with Steer Marketeer?',
      answer:
        'Simply sign up on our platform, and our team will guide you through the process of launching and optimizing your campaigns.',
      open: false
    },
    {
      question: 'What industries do you provide leads for?',
      answer:
        'We cater to various industries, including finance, healthcare, e-commerce, home services, and more.',
      open: false
    },
    {
      question: 'How do you ensure lead quality?',
      answer:
        'We use advanced fraud prevention tools, strict verification processes, and data-driven targeting to deliver high-quality leads.',
      open: false
    },
    {
      question: 'How can I become an affiliate with Steer Marketeer?',
      answer:
        'You can join our network by signing up on our website. Our team will review your application and get you started with top-performing offers.',
      open: false
    },
    {
      question: 'What type of offers do you provide?',
      answer:
        'We offer a range of CPA, CPL, and revenue-sharing models across multiple industries to help affiliates maximize earnings.',
      open: false
    },
    {
      question: 'How do I track my performance?',
      answer:
        'Our platform provides real-time analytics, tracking tools, and detailed reports to help you monitor your campaign performance.',
      open: false
    },
    {
      question: 'How do affiliates get paid?',
      answer:
        'We offer flexible payment options, including weekly and monthly payouts via PayPal, bank transfer, and other payment methods.',
      open: false
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'Our dedicated account managers and support team are available to assist with campaign setup, optimization, and troubleshooting.',
      open: false
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach us through our contact page, email.',
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