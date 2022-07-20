// Build me with only the properties we will actually use from the API
export class UserProfile {
	constructor(
		profileType: number,
		passwordMustBeChanged: boolean,
		acceptedTermCondOn: boolean | null,
		loginId: string,
		userId: string,
		emailAddress: string,
		firstName: string,
		lastName: string,
		phone: string,
		position: string,
		companyName: string,
		windowsId: string | null,
		createdBy: string,
		createdOn: string
	) {
		this.profileType = profileType;
		this.passwordMustBeChanged = passwordMustBeChanged;
		this.acceptedTermCondOn = acceptedTermCondOn;
		this.loginId = loginId;
		this.userId = userId;
		this.emailAddress = emailAddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.position = position;
		this.companyName = companyName;
		this.windowsId = windowsId;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
	}

	profileType: number;
	passwordMustBeChanged: boolean;
	acceptedTermCondOn: boolean | null;
	loginId: string;
	userId: string;
	emailAddress: string;
	firstName: string;
	lastName: string;
	phone: string;
	position: string;
	companyName: string;
	windowsId: string | null;
	createdBy: string;
	createdOn: string;
}
