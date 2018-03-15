import { DataProvider } from '../../providers/data/data';
import { IonicModule, NavController } from 'ionic-angular';
import { HomePage } from './home';
import { MyApp } from './../../app/app.component';
import { NavMock } from '../../../test-config/mocks-ionic';
import {} from 'jasmine';
import { async, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser';

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
        { provide: NavController, useClass: NavMock },
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

  it('should have the right title', () => {
    let de = fixture.debugElement.query(By.css('ion-title'));
    let el = de.nativeElement;
    expect(el.textContent).toContain('Todos')
  });

  it('should display todos with titles', () => {
    let item = component.items[0];
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('ion-list ion-item-sliding'));
    let el = de.nativeElement;
    expect(el.textContent).toContain(item.title);
  });

  it('should open details with a todo', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    let item = component[0];
    component.openDetails(item);

    expect(navCtrl.push).toHaveBeenCalledWith('DetailsPage', { todo: item });
  });
});