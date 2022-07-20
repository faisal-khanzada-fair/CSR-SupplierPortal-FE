import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { WindowRef } from "../../infrastructure/window-ref";
import { LiveChatService } from "../../services/livechat/livechat.service";
import { UserService } from "../../services/user/user.service";
import { CsrConnectHeaderComponent } from "./csr-connect-header.component";

describe("CsrConnectHeaderComponent", () => {
  let component: CsrConnectHeaderComponent;
  let fixture: ComponentFixture<CsrConnectHeaderComponent>;

  const userProfileSubject = new BehaviorSubject({});
  const userProfile = userProfileSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsrConnectHeaderComponent],
      providers: [
        { provide: UserService, useValue: { userProfile: userProfile } }, 
        { provide: LiveChatService, useValue: {loadLiveChat: ()=>{}}},
        WindowRef
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});