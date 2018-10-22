import { Component, OnInit } from '@angular/core';
declare function useThis(string): void;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trythis() {
    console.log('trying');
    useThis('container');
  }

}
