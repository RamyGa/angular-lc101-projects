import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pix';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.pinimg.com/236x/52/f3/0a/52f30a5ef6e3c60b86c0fb6da9326a1a--anime-dragon-anime-hot.jpg';
  image3 = 'https://i.pinimg.com/originals/60/6e/15/606e15ffb471efa3ed15b15b9d14b03e.jpg';

  constructor() { }

  ngOnInit() {
  }

}