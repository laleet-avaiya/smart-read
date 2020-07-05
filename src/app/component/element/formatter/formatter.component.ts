import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent implements OnInit {
  @Input() @Output() fontSize: number;
  constructor() { }

  ngOnInit(): void {
    
  }

}
