import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
@Input() title = "";
  constructor() { }

  ngOnInit() {
  }

}