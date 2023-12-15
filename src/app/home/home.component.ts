import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, group } from '@angular/animations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 animations:[
  trigger('fadeIn',[
    transition('void => *',[
      style({
        opacity:0,
        transform:'translateY(100px)',
      }),
      group([
        animate(1200,style({
          opacity:1,
        })),
        animate(1300,style({
          transform:'translateY(-10px)',
        }))
      ])
    ])
  ])
 ]

})
export class HomeComponent implements OnInit {
img1='assets/imgs/home.png'
head='heading'
p='p'
title='title'
  constructor() { }

  ngOnInit(): void {
  }

}
