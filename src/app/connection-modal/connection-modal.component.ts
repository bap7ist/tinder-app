import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss'],
})
export class ConnectionModalComponent implements OnInit {

  @Input() origin: string
  @Output() closeModal = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSwipe(): void {
    this.router.navigate(['/swipe'])
  }

}
