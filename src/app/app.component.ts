import { Component } from '@angular/core';
declare function useThis(string): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  trythis() {
    console.log('trying');
    useThis('container');
  }
}
