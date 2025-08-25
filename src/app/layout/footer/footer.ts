import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- needed for routerLink & routerLinkActive

@Component({
  selector: 'app-footer',
  standalone: true, // mark as standalone
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {}
