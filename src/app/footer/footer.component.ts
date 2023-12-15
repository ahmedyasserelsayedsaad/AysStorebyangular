import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
head='head'
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
  {
    path:'/login',
    name:'login'
  },
  {
    path:'/register',
    name:'register'
  },
];

f1='assets/imgs/play.jpg'
f2='assets/imgs/app.jpg'
f3='assets/imgs/pay.png'
  constructor() { }

  ngOnInit(): void {
  }

}
