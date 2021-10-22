import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Items } from 'src/app/models';
import { RestService } from 'src/app/services/rest.service';
import { item_id } from '../home/home.component';

@Component({
  selector: 'app-item-tabs',
  templateUrl: './item-tabs.component.html',
  styleUrls: ['./item-tabs.component.scss']
})
export class ItemTabsComponent implements OnInit {

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
