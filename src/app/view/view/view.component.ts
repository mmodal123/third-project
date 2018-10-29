import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  response: any = [];
  constructor(private svc: TestService) {}


ngOnInit() {
  this.getQuotes ( );
}

getQuotes() {
  this.svc.search().subscribe( value => {
    this.response = value;
    console.log(this.response);
  } );
}

}
