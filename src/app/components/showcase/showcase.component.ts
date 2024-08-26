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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [SafeUrlPipe, AsyncPipe, JsonPipe, NgFor, NgIf],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],  
  encapsulation: ViewEncapsulation.Emulated
})
export class ShowcaseComponent implements AfterViewInit, OnInit {

  projects$!: Observable<Project[]>; 

  @ViewChild('animateElement') animateElement!: ElementRef;  
  observer!: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private sanitizer: DomSanitizer,
    private projectService: ProjectService
  ) { 
    this.projects$ = this.projectService.projects$;
  }

  ngOnInit() { }

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

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
