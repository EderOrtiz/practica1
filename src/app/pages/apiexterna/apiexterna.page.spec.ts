import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiexternaPage } from './apiexterna.page';

describe('ApiexternaPage', () => {
  let component: ApiexternaPage;
  let fixture: ComponentFixture<ApiexternaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiexternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
