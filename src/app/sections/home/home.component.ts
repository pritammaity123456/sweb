import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images:any = [

    {
      head: 'IMG 1',
      description: 'Description',
      path: '../../../assets/img1.jpg'
    },
    {
      head: 'IMG 2',
      description: 'Description',
      path: '../../../assets/img2.jpg'
    },
    {
      head: 'IMG 3',
      description: 'Description',
      path: '../../../assets/img3.jpg'
    }

  ];
}