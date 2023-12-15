import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShareServicesService } from '../services/share-services.service';
import { animate, style, transition, trigger,group } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        group([
          animate(1200,style({
            opacity: 1,
          })),
          animate(1300,style({
            transform: 'translateY(-100px)'
          })),
        ])
          
        
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit, AfterViewInit {

  head = 'head'
 
  data: any;
  d: any = []
  categories = [];
  categories1 = [];
  lab = 'lab'
  ope = 'op'
  productsCart:any=[]
  @ViewChild('sel') sel!: ElementRef
  constructor(private share: ShareServicesService) {
  }

  ngAfterViewInit(): void {
    this.sel.nativeElement.focus();
  }


  ngOnInit(): void {
    this.getAlldata();
    this.getAllCate()
  }
  getAlldata() {
    this.share.getallProducts().subscribe((res: any) => {
      this.data = res
      this.d = this.data.products
    }, (err) => {
      alert(err)
    })
  }
  getAllCate() {
    this.share.getAllCat().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories)
    }, (err) => {
      alert(err)
    })
  }
  filterCat(event: any) {
    let val = event.target.value;
    if (val == 'All') {
      this.getAlldata();
    } else {
      this.filterByCate(val);
    }
  }
  filterByCate(key: any) {
    this.share.filterByCate(key).subscribe((res: any) => {
      this.d = res.products

      console.log(this.d)
    }, err => {
      alert(err)
    })
  }
  addtoCart(event:any){
    if('cart' in localStorage){
      this.productsCart=JSON.parse(localStorage.getItem('cart')!);
      let founded=this.productsCart.find((item:any) => item.id==event.id);
      if(founded){
        alert('this produect is already in your cart')
      }else{
        this.productsCart.push(event);
        localStorage.setItem('cart',JSON.stringify(this.productsCart))
        alert('you add this product to your cart')
      }
    
    }else{
      this.productsCart.push(event);
      localStorage.setItem('cart',JSON.stringify(this.productsCart));
     
    }
  }
}
