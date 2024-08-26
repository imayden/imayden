import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  sendEmail(): void {
    window.open('mailto:ayden.yiming.deng@gmail.com', '_blank');
  }
}
