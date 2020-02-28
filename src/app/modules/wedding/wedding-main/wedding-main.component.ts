import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wedding-main',
  templateUrl: './wedding-main.component.html',
  styleUrls: ['./wedding-main.component.css']
})
export class WeddingMainComponent implements OnInit {

  input_name: string = '';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onRSVP() {
    if (!this.input_name.trim().toLowerCase().startsWith('aaron')) {
      this.openSnackBar(this.input_name + ' is a moron', 'I know');
    }
  }

}
