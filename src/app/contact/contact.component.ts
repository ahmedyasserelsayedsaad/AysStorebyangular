import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, transition, style, animate, group } from '@angular/animations'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
            transform:'translateX(0px)',
          })),
        ])
      ])
    ])
  ]
})
export class ContactComponent implements OnInit , AfterViewInit {
head='head'
cimg='assets/imgs/contact.png'
title='title'
ptitle='ptitle'
button='button'
lab='lab'
pptitle='pptitle'
@ViewChild('usere') user!:ElementRef
@ViewChild('useere') useer!:ElementRef
@ViewChild('useeere') useeer!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.user.nativeElement.focus();
    this.useer.nativeElement.focus();
    this.useeer.nativeElement.focus();
  }

  add(c:NgForm){
    console.log(c.value)
  }

}
