import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServicesService } from '../services/share-services.service';
import { style, transition, trigger,animate,group } from '@angular/animations';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css'],
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
export class ProdetailsComponent implements OnInit {
  id:any
  detData:any={}
  d:any=[]
  head='head'
  mi='mi'
  im='im'
  rate='rate'
  h3='h3'
h4='h4'
p='p'
explor='explor'
cart='cart'
  constructor(private route:ActivatedRoute,private share:ShareServicesService) { 
    this.id= this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.proDet()
  }

  proDet(){
    this.share.detalies(this.id).subscribe((data:any) =>{
      this.detData=data
      this.d.push(this.detData)
      console.log(this.d)
    })
  }

}
