import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],  // Corrected property name
  encapsulation: ViewEncapsulation.Emulated
})
export class ShowcaseComponent implements AfterViewInit, OnInit {
  @ViewChild('animateElement') animateElement!: ElementRef;  // Changed to @ViewChild
  observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Using ViewChild instead of querySelectorAll
      if (this.animateElement) {
        this.observer.observe(this.animateElement.nativeElement);
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.observer) {
      this.observer.disconnect();
    }
  }
}
