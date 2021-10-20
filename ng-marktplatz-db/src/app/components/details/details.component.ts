import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private rs: RestService) { }

  item: Items[] = [];

  ngOnInit(): void {

    
  }

}
