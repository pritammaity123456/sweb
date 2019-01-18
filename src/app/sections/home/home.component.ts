import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  showNavigationArrows = false;
  showNavigationIndicators = true;

  images:any = [

    {
      head: 'Get on the right track with us',
      description: 'Lorem ipsum dolor sit amet',
      path: '../../../assets/img1.jpg'
    },
    {
      head: 'We know your project\'s value',
      description: 'Lorem ipsum dolor sit amet',
      path: '../../../assets/img2.jpg'
    },
    {
      head: 'Looking Forward for mobile application',
      description: 'Lorem ipsum dolor sit amet',
      path: '../../../assets/img3.jpg'
    }

  ];

}