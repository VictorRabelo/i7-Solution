import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectClientComponent } from './modal-select-client.component';

describe('ModalSelectClientComponent', () => {
  let component: ModalSelectClientComponent;
  let fixture: ComponentFixture<ModalSelectClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSelectClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
