import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marolix';
  user={
    firstname:'sai',
    city:'newyork',
    citycode:'ny'
  };
}
