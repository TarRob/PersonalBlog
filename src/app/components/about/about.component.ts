import { Component, OnInit } from '@angular/core';
import { postsAnimation } from 'src/animations';

@Component({
  selector: 'pb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ postsAnimation ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
