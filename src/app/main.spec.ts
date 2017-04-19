import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';


@Component({selector: 'vm-header', template: ''})
class MockHeaderComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockHeaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('vm-header')).toBeDefined();
  });
});
