import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  gmanBtn: number = 1;
  bmaidBtn: number = 1;

  constructor() { }

  ngOnInit() {
  }

  gmanClick(btn: number) {
    this.gmanBtn = btn;

    switch (btn) {
      case 1: {
      }
    }
  }

  bmaidClick(btn: number) {
    this.bmaidBtn = btn;

    switch (btn) {
      case 1: {
      }
    }
  }

}
