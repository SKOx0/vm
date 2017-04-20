import {HeaderComponent} from './header';
import {TestBed, async} from '@angular/core/testing';

function getNativeElement(component) {
  const fixture = TestBed.createComponent(HeaderComponent);
  fixture.detectChanges();
  const nativeElement = fixture.nativeElement;

  return nativeElement;
}

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
      var header = getNativeElement(HeaderComponent);
      var logoExpectation = header.querySelector('.header-logo img');
      expect(logoExpectation).not.toBeNull();
      expect(logoExpectation.getAttribute('src')).not.toBeFalsy();
    });

    it('should render \'Victor Mesquita\'', () => {
      var header = getNativeElement(HeaderComponent);
      expect(header.querySelector('a').textContent.trim()).toBe('Victor Mesquita');
    });
  });
});
