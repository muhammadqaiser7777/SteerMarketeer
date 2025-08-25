import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, Blog } from '../../service/blog-service';

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

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  openBlog(blog: Blog) {
    this.selectedBlog = blog;
  }

  backToList() {
    this.selectedBlog = null;
  }
}
