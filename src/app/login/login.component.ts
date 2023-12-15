import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, transition, style, animate, group } from '@angular/animations'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(100px)',
        }),
        group([
          animate(1200,style({
            opacity:1
          })),
          animate(1300,style({
            transform:'translateX(0)'
          }))
        ])
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
head='head'
lab='lab'
h5='h5'
button='button'
  constructor() { }

  ngOnInit(): void {
  }
add(l:NgForm){
console.log(l.value)
}
}
