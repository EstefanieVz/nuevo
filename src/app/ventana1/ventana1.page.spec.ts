import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana1Page } from './ventana1.page';

describe('Ventana1Page', () => {
  let component: Ventana1Page;
  let fixture: ComponentFixture<Ventana1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventana1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
