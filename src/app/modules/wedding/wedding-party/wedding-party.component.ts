import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  brides: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCheck(){
    if (this.brides){
      this.brides = false;
    }else{
      this.brides = true;
    }
  }
}
