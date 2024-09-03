import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwaidmComponent } from './kwaidm.component';

describe('KwaidmComponent', () => {
  let component: KwaidmComponent;
  let fixture: ComponentFixture<KwaidmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KwaidmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwaidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
