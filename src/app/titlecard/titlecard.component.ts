import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-card',
  templateUrl: './titlecard.component.html',
  styleUrls: ['./titlecard.component.css']
})
export class TitlecardComponent implements OnInit {

@Input() title = "";
@Input() metric = "";
  constructor() { }

  ngOnInit() {
  }

}