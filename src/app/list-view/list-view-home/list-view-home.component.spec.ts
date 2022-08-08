import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewHomeComponent } from './list-view-home.component';

describe('ListViewHomeComponent', () => {
  let component: ListViewHomeComponent;
  let fixture: ComponentFixture<ListViewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
