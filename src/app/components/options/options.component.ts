import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() name: string | undefined
  @Input() icon: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
