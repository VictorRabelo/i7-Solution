import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubagesComponent } from './cubages.component';

describe('CubagesComponent', () => {
  let component: CubagesComponent;
  let fixture: ComponentFixture<CubagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
