export class UserPermission {
	constructor(name: string, permission: string, reference: string) {
		this.name = name;
		this.accessRights = permission;
		this.reference = reference;
	}

	name: string;
	accessRights: string;
	reference: string;
}
