import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Items } from 'src/app/models';
import { RestService } from 'src/app/services/rest.service';

export var item_id: number;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [ 
      transition(':enter', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ]),
  ]

})

export class HomeComponent implements OnInit, OnDestroy {
  public sort!: string; //Sorting By Properties of Items
  private itemSub: Subscription = new Subscription;
  constructor(private rs: RestService, private router: Router) { 
    
  }

  headers = ["id", "name", "price", "barcode", "description"]

  item: Items[] = [];
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

  openItemDetails(id: number): void {
    item_id=id;
    this.router.navigate(['details', id]);
    
  }

  ngOnDestroy(): void{
    this.itemSub.unsubscribe;
  }

  
}
