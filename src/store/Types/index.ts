export interface IOfficeCreate {
	officeName: string;
	physicalAddress: string;
	emailAddress: string;
	phoneNumber: string;
	capacity: number;
	officeColor: string;
}

export interface IOfficeRead extends IOfficeCreate {
	id?: string; // UUID
}

export interface IStaffRead extends IStaffCreate {
	id?: number;
}

export interface IStaffCreate {
	firstName: string;
	lastName: string;
	avatar: string;
	// dummy relationships
	officeId: number;
}
