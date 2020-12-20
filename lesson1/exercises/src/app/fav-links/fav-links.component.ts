import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['https://tvguide1.cbsistatic.com/feed/1/713/119099713.jpg','https://images-na.ssl-images-amazon.com/images/I/51JCWQK8E7L._AC_SY445_.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
