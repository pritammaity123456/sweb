import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  environment:string =  environment.baseUrl;
  
  public tempVar = false;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(){

    if(window.pageYOffset > 1){
      this.tempVar = true;
    }
    else{
      this.tempVar = false;
    }
    
  }
  ngOnInit() {
  }

}
