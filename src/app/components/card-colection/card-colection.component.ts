import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-colection',
  templateUrl: './card-colection.component.html',
  styleUrls: ['./card-colection.component.css']
})
export class CardColectionComponent implements OnInit {

  @Input() img: string | undefined
  @Input() title: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
