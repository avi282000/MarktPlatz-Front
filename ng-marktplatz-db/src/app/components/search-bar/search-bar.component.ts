import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [trigger('slideInOut', [
    transition(':enter', [group([
        animate('400ms ease-in-out', style({
            'opacity': '1',
            'max-height': '0'
        })),
        animate('600ms ease-in-out', style({
            'max-height': '60px'
        })),
        animate('700ms ease-in-out', style({
            'visibility': 'visible'
        }))
    ]
    )]),

])] 
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }  //"Router" is for redirecting 

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search])  //Redirecting the Application to the Search Page
    
  }

}
