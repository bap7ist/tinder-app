import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss']
})
export class TinderCardComponent implements OnInit {

  @Input() darkmode: boolean

  @Input() user: User
  @Output() swipe = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
