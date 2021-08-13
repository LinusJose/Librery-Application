import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrerytableComponent } from './librerytable.component';

describe('LibrerytableComponent', () => {
  let component: LibrerytableComponent;
  let fixture: ComponentFixture<LibrerytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrerytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrerytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
