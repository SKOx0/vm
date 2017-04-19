import {HeaderComponent} from './header';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    });
    TestBed.compileComponents();
  }));
  describe('Logo text', () => {
    it('should render logo', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const header = fixture.nativeElement;
      var logoExpectation = header.querySelector('.header-logo');
      expect(logoExpectation).not.toBeNull();
      expect(logoExpectation.getAttribute('src')).not.toBeFalsy();
    });

    it('should render \'Victor Mesquita\'', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const header = fixture.nativeElement;
      expect(header.querySelector('a').textContent.trim()).toBe('Victor Mesquita');
    });


  });



});
