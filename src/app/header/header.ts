import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  title :number | string = "📝 TaskFlow" 
  subtitle:string= "Organize Smarter. Achieve More"

}
