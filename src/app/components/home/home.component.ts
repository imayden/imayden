import { Component } from '@angular/core';
import { ShowcaseComponent } from '../showcase/showcase.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
