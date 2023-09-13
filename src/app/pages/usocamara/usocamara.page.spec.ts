import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsocamaraPage } from './usocamara.page';

describe('UsocamaraPage', () => {
  let component: UsocamaraPage;
  let fixture: ComponentFixture<UsocamaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsocamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
