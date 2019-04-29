import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSettingsPage } from './store-settings.page';

describe('StoreSettingsPage', () => {
  let component: StoreSettingsPage;
  let fixture: ComponentFixture<StoreSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
