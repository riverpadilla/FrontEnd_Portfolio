import { AfterContentInit, AfterViewChecked, Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements AfterViewChecked{

  constructor(private loginData: PortfolioService) {
 }

 ngAfterViewChecked(): void {
  const loginCheck = document.querySelector(".social button");
  const modButtons = document.querySelectorAll(".login");
  
    if(loginCheck!.innerHTML=="Login"){
      modButtons.forEach(mButtons => mButtons.setAttribute("style", "visibility:hidden"))
    }else{
      modButtons.forEach(mButtons => mButtons.setAttribute("style", "visibility:visible"))
    }
  
  }
}
