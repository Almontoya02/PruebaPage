import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {
  @Input() icon: string | undefined
  @Input() img: string | undefined
  @Input() title: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
