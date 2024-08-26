import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  title: string;
  subtitle: string;
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
      title: 'MIUI 13 · Showcase',
      subtitle: 'Xiaomi, 2021',
      description: 'The showcase site for MIUI 13 (a legacy version of Xiaomi HyperOS), an animated site built with React, deployed on Vercel.',
      link: 'https://miui13.home.miui.com',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/7SIDnTiQGmM?autoplay=1&loop=1&playlist=7SIDnTiQGmM&controls=0&mute=1&vq=hd1080'
      }
    },

    {
      title: 'Redmi 11 Series · Showcase',
      subtitle: 'Redmi, 2021',
      description: 'The product showcase site for Redmi 11 Series, an animated site built with React.',
      link: 'https://miui13.home.miui.com',
      media: {
        type: 'video',
        // src: 'https://www.youtube.com/embed/7SIDnTiQGmM?autoplay=1&loop=1&playlist=7SIDnTiQGmM&controls=0&mute=1'
        src: "https://www.youtube.com/embed/QJ0E-x93erM?autoplay=1&loop=1&mute=1&controls=0&playlist=QJ0E-x93erM&vq=hd1080"
      }
    },

    {
      title: 'HyperOS · Dark Theme UI',
      subtitle: 'HyperOS, 2021',
      description: 'The product showcase site for Redmi 11 Series, an animated site built with React.',
      link: 'https://www.mi.com/global/product/redmi-note-11-pro-plus-5g/',
      media: {
        type: 'image',
        src: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12-lite/929ca834a3eff100dea8137ae43d6584.png'
      }
    },

    {
      title: 'Creator Marketplace',
      subtitle: 'Kwai, 2020',
      description: 'Description',
      link: 'https://miui13.home.miui.com',
      media: {
        type: 'video',
        src: 'https://www.youtube.com/embed/7SIDnTiQGmM?autoplay=1&loop=1&playlist=7SIDnTiQGmM&controls=0&mute=1'
      }
    },
  ]);


  constructor() { }

  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  updateProjects(newProjects: Project[]): void {
    this.projectsSubject.next(newProjects);
  }
}
