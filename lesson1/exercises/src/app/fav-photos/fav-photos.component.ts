import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pix';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/51JCWQK8E7L._AC_SY445_.jpg';
  image3 = 'https://i.pinimg.com/originals/60/6e/15/606e15ffb471efa3ed15b15b9d14b03e.jpg';
  image4 = 'https://tvguide1.cbsistatic.com/feed/1/713/119099713.jpg';

  constructor() { }

  ngOnInit() {
  }

}