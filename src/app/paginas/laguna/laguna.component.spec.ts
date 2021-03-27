import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunaComponent } from './laguna.component';

describe('LagunaComponent', () => {
  let component: LagunaComponent;
  let fixture: ComponentFixture<LagunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
