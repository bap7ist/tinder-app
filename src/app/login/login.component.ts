import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showModal: boolean
  modalOrigin: string

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showModal = false
  }

  openModal(origin: string) {
    this.modalOrigin = origin
    this.showModal = true
  }

  closeModal(close: boolean) {
    if (close) this.showModal = false
  }

  goToSwipe() {
    this.router.navigate(['/swipe']);
  }
}
