import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana2Page } from './ventana2.page';

describe('Ventana2Page', () => {
  let component: Ventana2Page;
  let fixture: ComponentFixture<Ventana2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventana2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
