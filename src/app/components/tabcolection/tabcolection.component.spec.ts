import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabcolectionComponent } from './tabcolection.component';

describe('TabcolectionComponent', () => {
  let component: TabcolectionComponent;
  let fixture: ComponentFixture<TabcolectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabcolectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabcolectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
