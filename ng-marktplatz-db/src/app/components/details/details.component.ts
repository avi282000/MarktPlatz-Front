import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Items } from 'src/app/models';
import { RestService } from 'src/app/services/rest.service';
import { item_id } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('fade', [ 
      transition(':enter', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
   
  ]
})
export class DetailsComponent implements OnInit, OnDestroy{

  constructor(private rs: RestService) { }

  item: Items[] = [];
  itemSub: Subscription = new Subscription;

  
  ngOnInit(): void {
    this.itemSub = this.rs.readItems()
    .subscribe(
      (response) =>
      {
        this.item = response;
        console.log(this.item);
      },
      (error) =>
      {
        console.log("No Data Found" + error);
      }
    )
    
  }

  getId(): number{
    return item_id;
  }

  ngOnDestroy(): void{
    this.itemSub.unsubscribe;
  }
    

}
