import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsrComponentScriptLoaderService } from '../infrastructure/csr-component-script-loader-service';
import { SystemMessage } from '../infrastructure/system-message';
import { CsrVideoComponent, CsrVideoType } from './csr-video.component';


describe('CsrVideoComponent', () => {
  let component: CsrVideoComponent;
  let fixture: ComponentFixture<CsrVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       declarations: [ CsrVideoComponent ],
       providers: [ 
         CsrComponentScriptLoaderService
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input "type" must be of value CsrVideoType', ()=> {
    component.type = -1;
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
  });

  it('Input "media" is required when "type" is CsrVideoType.Wistia', ()=> {
    //let jasmine know our love for invalidParameter
    spyOn(SystemMessage, "invalidParameter");

    component.type = CsrVideoType.Wistia;
    component.media = "";
    component.inputsValid();
    fixture.detectChanges();

    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });


});
