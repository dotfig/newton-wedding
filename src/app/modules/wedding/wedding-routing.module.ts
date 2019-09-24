import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { Routes, RouterModule } from '@angular/router';
import { WeddingMainComponent } from './wedding-main/wedding-main.component';

const routes: Routes = [
  {
    path: '', component: WeddingMainComponent,
    data: {
      title: "Newton Wedding"
    }
  },
  {
    path: 'party', component: WeddingPartyComponent,
    data: {
      title: "Wedding Party"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
