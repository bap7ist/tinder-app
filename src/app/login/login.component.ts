import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showModal: boolean;
  modalOrigin: string;
  body = document.body;

  cards = [
    {
      name: 'Rebecca Stephenson',
      text: 'J’étais décidée à ce que le prochain mec avec qui je m’engagerai soit l’homme avec qui je passerai le reste de ma vie (pas seulement avec qui je me marierai). J’étais super exigeante et je ne m’attendais pas à rencontrer un mec sur Tinder. J’ai décidé de m’inscrire quand même, de matcher et de voir ce qui se passerait.',
    },
    {
      name: 'Elissa Donahue',
      text: 'J’étais décidée à ce que le prochain mec avec qui je m’engagerai soit l’homme avec qui je passerai le reste de ma vie (pas seulement avec qui je me marierai). J’étais super exigeante et je ne m’attendais pas à rencontrer un mec sur Tinder. J’ai décidé de m’inscrire quand même, de matcher et de voir ce qui se passerait.',
    },
    {
      name: 'Maria Sveranov',
      text: 'J’étais décidée à ce que le prochain mec avec qui je m’engagerai soit l’homme avec qui je passerai le reste de ma vie (pas seulement avec qui je me marierai). J’étais super exigeante et je ne m’attendais pas à rencontrer un mec sur Tinder. J’ai décidé de m’inscrire quand même, de matcher et de voir ce qui se passerait.',
    },
  ];

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.showModal = false;
  }


  openModal(origin: string) {
    this.modalOrigin = origin;
    this.showModal = true;
    this.body.style.overflowY = 'hidden';
  }

  closeModal(close: boolean) {
    if (close === true) {
      this.showModal = false;
      this.body.style.overflowY = '';
    }
  }

  goToSwipe() {
    this.router.navigate(['/swipe']);
  }
}
