import { IonicModule } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBarMock, SplashScreenMock, PlatformMock } from '../../test-config/mocks-ionic';
import { MyApp } from './app.component';
import {} from 'jasmine';
import { async, TestBed } from '@angular/core/testing'

describe('HomePage', () => {
  let fixture;
  let component: MyApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  })

  afterEach(() => {
    fixture.destroy;
    component = null;
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('has a root page of HomePage', () => {
    expect(component.rootPage).toBe('HomePage');
  });
});