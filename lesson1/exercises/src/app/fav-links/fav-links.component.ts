import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['www.google.com', 'www.w3schools.com'];
  codeGif = ['https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'];
  constructor() { }

  ngOnInit() {
  }

}
