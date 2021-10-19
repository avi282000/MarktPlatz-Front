import { Component, OnInit } from '@angular/core';
import { Items, Users } from 'src/app/models';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string; //Sorting By Properties of Items
  constructor(private rs: RestService) { 
    
  }

  headers = ["Recieved Data"]

  item: Items[] = [];

  ngOnInit(): void {

    this.rs.readItems()
    .subscribe(
      (response) =>
      {
        this.item = response;
      },
      (error) =>
      {
        console.log("No Data Found" + error);
      }
    )
    
  }

}
