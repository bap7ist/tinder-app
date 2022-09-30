import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, take, tap } from 'rxjs';
import { User } from '../models/user';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {
  users: Array<User>;

  favourites = new Array<User>();

  darkmode: boolean

  settings: boolean

  switched: boolean

  index: number;

  girl: boolean;
  boy: boolean;

  settingsForm = new FormGroup({
    girl : new FormControl(),
    boy: new FormControl(),
  })


  constructor(private userApi: UserApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initParamsFromRoute();
    this.getUsers(50, this.girl, this.boy);
    this.index = 1;
    this.initForm()
  }

  initForm():void {
    this.settingsForm = new FormGroup({
      girl : new FormControl(),
      boy: new FormControl(),
    })
  }

  initParamsFromRoute() {
    this.route.queryParams
      .pipe(
        take(1),
        filter((params) => params['girl']),
        tap(({ girl }) => (this.girl = girl))
      )
      .subscribe();
    this.route.queryParams
      .pipe(
        take(1),
        filter((params) => params['boy']),
        tap(({ boy }) => (this.boy = boy))
      )
      .subscribe();
  }

  getUsers(amount: number, girl: boolean, boy: boolean) {
    this.userApi.getUsers(amount).subscribe((results: Array<User>) => {
      if (boy && girl )
      this.users = results;
      else if (boy) 
      this.users = results.filter((res) => res.gender === 'male');
      else if (girl)
      this.users = results.filter((res) => res.gender === 'female');
    });
  }


  onSwipe(swipe: string, user: User) {
    if (swipe === 'right') this.favourites.push(user);
    this.index++;
  }

  switchMode() {
    this.darkmode = !this.darkmode
  }

  get boyChecked() {
    return this.settingsForm.controls['boy'].value as FormControl
  }

  get girlChecked() {
    return this.settingsForm.controls['girl'].value as FormControl
  }
}
