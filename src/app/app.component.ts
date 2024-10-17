import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'Home' },
    { title: 'Multiplicadora', url: '/multiplicadora', icon: 'close-circle' },
    { title: 'Promedio', url: '/promedio', icon: 'bar-chart' },
    
  ];
 
}
