import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss'],
})
export class ConnectionModalComponent implements OnInit {
  user: User;

  conectionForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    girl: new FormControl(),
    boy: new FormControl(),
  });

  @Input() origin: string;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.conectionForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      girl: new FormControl(),
      boy: new FormControl(),
    });
  }

  goToSwipe(): void {
    this.router.navigate(['/swipe'], {
      queryParams: {
        girl: this.girlCheckbox.value,
        boy: this.boyCheckbox.value,
      },
    });
  }

  get girlCheckbox() {
    return this.conectionForm.controls['girl'] as FormControl;
  }
  get boyCheckbox() {
    return this.conectionForm.controls['boy'] as FormControl;
  }
}
