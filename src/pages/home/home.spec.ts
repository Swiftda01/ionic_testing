import { DataProvider } from '../../providers/data/data';
import { IonicModule, NavController } from 'ionic-angular';
import { HomePage } from './home';
import { MyApp } from './../../app/app.component';
import {} from 'jasmine';
import { async, TestBed } from '@angular/core/testing'

describe('HomePage', () => {
  let fixture;
  let component: HomePage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        DataProvider,
        NavController
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  })

  afterEach(() => {
    fixture.destroy;
    component = null;
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add items', () => {
    component.addTodo({ title: 'Test', info: 'Test' });
    expect(component.items.length).toBe(4);
  });

  it('should remove items', () => {
    component.removeTodo(0);
    expect(component.items.length).toBe(2);
  });
});