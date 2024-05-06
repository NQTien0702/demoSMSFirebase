import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmstestComponent } from './smstest.component';

describe('SmstestComponent', () => {
  let component: SmstestComponent;
  let fixture: ComponentFixture<SmstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmstestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
