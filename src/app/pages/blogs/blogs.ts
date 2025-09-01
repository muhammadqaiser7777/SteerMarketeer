import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, Blog } from '../../service/blog-service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css']
})
export class BlogComponent {
  blogs: Blog[] = [];
  selectedBlog: Blog | null = null;
  showBackToTop = false;

  constructor(
    private blogService: BlogService,
    private zone: NgZone,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();

    // Check if a slug exists in the URL and open the corresponding blog
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.selectedBlog = this.blogs.find(blog =>
        blog.title.toLowerCase()
            .replace(/\s+/g, '-')      // spaces → dash
            .replace(/[^\w-]+/g, '')   // remove special chars
            === slug
      ) || null; // fallback to null if not found
    }

    // Show back-to-top button on scroll
    window.addEventListener('scroll', () => {
      this.zone.run(() => {
        this.showBackToTop = window.scrollY > 300;
      });
    }, { passive: true });
  }

  // Scroll to top
  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Open a blog
  openBlog(blog: Blog) {
    this.selectedBlog = blog;

    // Scroll the main heading into view
    setTimeout(() => {
      const header = document.querySelector('.blog-detail-container .page-header');
      header?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);

    // Update URL to /blog/selected-blog-title
    const slug = blog.title
      .toLowerCase()
      .replace(/\s+/g, '-')      // spaces → dash
      .replace(/[^\w-]+/g, '');  // remove special chars
    this.location.replaceState(`/blog/${slug}`);
  }

  // Back to blog list
  backToList() {
    this.selectedBlog = null;

    // Reset URL to main blog page
    this.location.replaceState('/blog');

    // Scroll to top
    this.backToTop();
  }
}
