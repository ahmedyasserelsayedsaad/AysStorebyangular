import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  card = 'card'
  button = 'button'
  body = 'body'
  h5 = 'h5'
  p = 'p'

  @Input() data:any={}
  @Output() item=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item.emit(this.data)
  }

}
