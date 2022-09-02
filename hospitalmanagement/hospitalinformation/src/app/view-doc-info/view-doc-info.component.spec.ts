import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocInfoComponent } from './view-doc-info.component';

describe('ViewDocInfoComponent', () => {
  let component: ViewDocInfoComponent;
  let fixture: ComponentFixture<ViewDocInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDocInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
