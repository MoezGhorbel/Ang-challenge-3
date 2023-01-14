import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFCComponent } from './tdfc.component';

describe('TDFCComponent', () => {
  let component: TDFCComponent;
  let fixture: ComponentFixture<TDFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDFCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
