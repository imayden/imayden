import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiuiComponent } from './miui.component';

describe('MiuiComponent', () => {
  let component: MiuiComponent;
  let fixture: ComponentFixture<MiuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
