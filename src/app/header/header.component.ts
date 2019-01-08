import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
