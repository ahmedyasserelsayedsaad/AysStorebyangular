import { style, transition, trigger,animate,group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({
          opacity:0,
        transform:'translateY(100px)',
        }),
        group([
          animate(1200,style({
            opacity:1
          })),
          animate(1300,style({
            transform:'translateY(-10px)',
          })),
        ])
      ])
    ])
  ]
})
export class CartComponent implements OnInit {
  head = 'head'
  cartProduct: any = []
  total: any = 0
  tot = 'tot'
  constructor() { }

  ngOnInit(): void {
    this.getCartProduct();
  }

  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!)
    }
    this.caltotal()
  }
  caltotal() {
    this.total = 0
    for (let x in this.cartProduct) {
      this.total += this.cartProduct[x].price;
    }

  }
  deleteitem(index: number) {
    this.cartProduct.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
    console.log(index)
    this.caltotal()
  }

}
