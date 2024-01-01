import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEnvironmentsComponent } from './game-environments.component';

describe('GameEnvironmentsComponent', () => {
  let component: GameEnvironmentsComponent;
  let fixture: ComponentFixture<GameEnvironmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameEnvironmentsComponent]
    });
    fixture = TestBed.createComponent(GameEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
