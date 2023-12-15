import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
links=[
  {
    path:'/',
    name:'Home'
  },
  {
    path:'/about',
    name:'about'
  },
  {
    path:'/contact',
    name:'contact'
  },
  {
    path:'/products',
    name:'products'
  },
  {
    path:'/cart',
    name:'cart'
  },
];

nav='nav'
logo='logo'
  constructor() { }

  ngOnInit(): void {
  }

}
