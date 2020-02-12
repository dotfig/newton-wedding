import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingMainComponent } from './modules/wedding/wedding-main/wedding-main.component';
import { WeddingPartyComponent } from './modules/wedding/wedding-party/wedding-party.component';
import { WeddingStoryComponent } from './modules/wedding/wedding-story/wedding-story.component';
import { WeddingTravelComponent } from './modules/wedding/wedding-travel/wedding-travel.component';
import { WeddingSchedComponent } from './modules/wedding/wedding-sched/wedding-sched.component';
import { WeddingRegComponent } from './modules/wedding/wedding-reg/wedding-reg.component';
import { WeddingPicsComponent } from './modules/wedding/wedding-pics/wedding-pics.component';
import { WeddingFaqComponent } from './modules/wedding/wedding-faq/wedding-faq.component';
import { WeddingStuffComponent } from './modules/wedding/wedding-stuff/wedding-stuff.component';


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
  },
  {
    path: 'story', component: WeddingStoryComponent,
    data: {
      title: "Our Story"
    }
  },
  {
    path: 'travel', component: WeddingTravelComponent,
    data: {
      title: "Travel"
    }
  },
  {
    path: 'sched', component: WeddingSchedComponent,
    data: {
      title: "Schedule"
    }
  },
  {
    path: 'reg', component: WeddingRegComponent,
    data: {
      title: "Registry"
    }
  },
  {
    path: 'pics', component: WeddingPicsComponent,
    data: {
      title: "Photos"
    }
  },
  {
    path: 'faq', component: WeddingFaqComponent,
    data: {
      title: "Frequently Asked Questions"
    }
  },
  {
    path: 'stuff', component: WeddingStuffComponent,
    data: {
      title: "Things To Do"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
