import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteriorJuegoPage } from './interior-juego.page';

describe('InteriorJuegoPage', () => {
  let component: InteriorJuegoPage;
  let fixture: ComponentFixture<InteriorJuegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorJuegoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteriorJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
