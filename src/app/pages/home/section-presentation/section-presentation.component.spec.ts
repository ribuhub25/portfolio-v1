import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPresentationComponent } from './section-presentation.component';

describe('SectionPresentationComponent', () => {
  let component: SectionPresentationComponent;
  let fixture: ComponentFixture<SectionPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
