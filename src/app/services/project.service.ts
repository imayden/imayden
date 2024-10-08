import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  title: string;
  subtitle: string;
  position: string;
  description: string;
  link: string;
  media: {
    type: 'video' | 'image';
    src: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsSubject: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([

    {
      title: 'MIUI Showcase',
      subtitle: 'Xiaomi, 2022',
      position: 'Product Manager',
      description: 'The showcase site for MIUI 13 (a legacy version of Xiaomi HyperOS) with animated and storytelling interaction.',
      link: '/miui-showcase',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/7SIDnTiQGmM?autoplay=1&loop=1&playlist=7SIDnTiQGmM&controls=0&mute=1&vq=hd1080'
      }
    },

    {
      title: 'Redmi Product Showcase',
      subtitle: 'Redmi, 2021',
      position: 'Product Manager',
      description: 'The smartphone product showcase site for Redmi Note 11 Series showcasing features and specs with animation.',
      link: '/redmi-showcase',
      media: {
        type: 'video',
        src: "https://www.youtube.com/embed/QJ0E-x93erM?autoplay=1&loop=1&mute=1&controls=0&playlist=QJ0E-x93erM&vq=hd1080"
      }
    },

    {
      title: 'Dark Theme · AOSP UI',
      subtitle: 'HyperOS, 2021',
      position: 'Product Manager',
      description: 'The design & development of the Dark Theme UI for MIUI (legacy version of HyperOS, Xiaomi’s custom AOSP UI).',
      link: '/darkmode',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/5MQR4ByVWRE?autoplay=1&loop=1&playlist=5MQR4ByVWRE&controls=0&mute=1'
      }
    },

    {
      title: 'Distribution Marketplace',
      subtitle: 'Kwai Shop, 2020',
      position: 'Product Manager',
      description: 'The distribution marketplace of Kwai Shop, a cross-device web app for creators & merchants to cooperate.',
      link: '/kwai-dm',
      media: {
        type: 'image',
        src: 'https://raw.githubusercontent.com/imayden/imayden/main/public/covers/kwaishop-ecomm.png'
      }
    },
  ]);


  constructor() { }

  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  updateProjects(newProjects: Project[]): void {
    this.projectsSubject.next(newProjects);
  }
}
