import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingStuffComponent } from './wedding-stuff.component';

describe('WeddingStuffComponent', () => {
  let component: WeddingStuffComponent;
  let fixture: ComponentFixture<WeddingStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
