import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicadoraPage } from './multiplicadora.page';

describe('MultiplicadoraPage', () => {
  let component: MultiplicadoraPage;
  let fixture: ComponentFixture<MultiplicadoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
