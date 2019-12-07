import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingStoryComponent } from './wedding-story.component';

describe('WeddingStoryComponent', () => {
  let component: WeddingStoryComponent;
  let fixture: ComponentFixture<WeddingStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
