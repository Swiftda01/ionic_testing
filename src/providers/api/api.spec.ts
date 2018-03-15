import { ApiProvider } from './api';
import {} from 'jasmine';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing'

describe('ApiProvider', () => {
  let apiProvider: ApiProvider;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProvider],
      imports: [HttpClientTestingModule]
    });

    backend = TestBed.get(HttpTestingController);
    apiProvider = TestBed.get(ApiProvider);
  });

  describe('getUser', () => {
    it('should make a request to get a user', () => {
      apiProvider.getUsers()
      .subscribe(data => {
        expect(data).toBeTruthy();
        expect(data['results'].length).toBe(1);
      });

      const mockResponse = {
        "results":[{"gender":"male","name":{"title":"mr","first":"thibault","last":"garcia"},"location":{"street":"5011 rue cyrus-hugues","city":"rouen","state":"hauts-de-seine","postcode":14824},"email":"thibault.garcia@example.com","login":{"username":"blueswan326","password":"123abc","salt":"ti7Ebtvw","md5":"b3b686dc3b1eca9260f536656a897edb","sha1":"9f467e3695d45fc4fb4f52c4fa54cbce3db72aa1","sha256":"f8f3bfac4884539f6c08f8c6dc573d18d8178d4032a408095e48b63800a772a1"},"dob":"1954-01-01 15:40:52","registered":"2014-10-06 11:36:25","phone":"03-43-50-25-24","cell":"06-78-09-15-89","id":{"name":"INSEE","value":"154098027587 25"},"picture":{"large":"https://randomuser.me/api/portraits/men/19.jpg","medium":"https://randomuser.me/api/portraits/med/men/19.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/19.jpg"},"nat":"FR"}],
        "info":{"seed":"0f9873e550c6fdb5","results":1,"page":1,"version":"1.1"}
      }
    });
  });
});