import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  environment: string = environment.baseUrl;
  showNavigationArrows = false;
  showNavigationIndicators = true;

  images:any = [

    {
      head: 'Get on the right track with us',
      description: 'Lorem ipsum dolor sit amet',
      path: `${this.environment}/assets/img1.jpg`
    },
    {
      head: 'We know your project\'s value',
      description: 'Lorem ipsum dolor sit amet',
      path: `${this.environment}/assets/img2.jpg`
    },
    {
      head: 'Looking Forward for mobile application',
      description: 'Lorem ipsum dolor sit amet',
      path: `${this.environment}/assets/img3.jpg`
    }

  ];

}