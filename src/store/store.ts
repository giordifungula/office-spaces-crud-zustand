import create from 'zustand';
import { IOfficeCreate, IOfficeRead } from './Types';

type Store = {
	offices: IOfficeRead[];
	newOffice: IOfficeRead;
	setNewOffice: (newOffice: IOfficeRead) => void;
	addOffice: () => void;
	removeOffice: (id: string) => void;
	editOffice: (id: string) => void;
	setOffices: (offices: IOfficeRead[]) => void;
	// TODO: add staffs
};

const useStore = create<Store>((set) => ({
	offices: [],
	newOffice: {
		officeName: '',
		physicalAddress: '',
		emailAddress: '',
		phoneNumber: '',
		capacity: 0,
		officeColor: '',
	},
	setNewOffice: (newOffice: IOfficeRead) => {
		set((state) => ({ ...state, newOffice }));
	},
	addOffice: () => {
		set((state) => ({
			...state,
			offices: [...state.offices, state.newOffice],
		}));
	},
	removeOffice: (id: string) => {
		set((state) => ({
			...state,
			offices: state.offices.filter((office) => office.id !== id),
		}));
	},
	editOffice: (id: string) => {
		set((state) => ({
			...state,
			offices: state.offices.map((office) => {
				if (office.id === id) {
					return { ...office, ...state.newOffice };
				}
				return office;
			}),
		}));
	},
	setOffices: (offices: IOfficeRead[]) => {
		set((state) => ({ ...state, offices }));
	},
}));

export default useStore;
