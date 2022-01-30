import create from 'zustand';
import { IOfficeCreate, IOfficeRead } from './Types';

type Store = {
	offices: IOfficeRead[];
	newOffice: IOfficeCreate;
	setNewOffice: (newOffice: IOfficeCreate) => void;
	addOffice: () => void;
	removeOffice: (id: number) => void;
	editOffice: (id: number) => void;
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
	setNewOffice: (newOffice: IOfficeCreate) => {
		set((state) => ({ ...state, newOffice }));
	},
	addOffice: () => {
		set((state) => ({
			...state,
			offices: [...state.offices, state.newOffice],
		}));
	},
	removeOffice: (id: number) => {
		set((state) => ({
			...state,
			offices: state.offices.filter((office) => office.id !== id),
		}));
	},
	editOffice: (id: number) => {
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
