export class Organisation {
    constructor(id:string, name:string, invalidContacts:number, outOfDateContacts:number, includeInUiCount: number)
    {
        this.id = id;
        this.name = name;
        this.invalidContacts = invalidContacts;
        this.outOfDateContacts = outOfDateContacts;
        this.includeInUiCount = includeInUiCount;
    }

    id: string;
    name: string;
    invalidContacts: number;
    outOfDateContacts: number;
    includeInUiCount: number;
}
