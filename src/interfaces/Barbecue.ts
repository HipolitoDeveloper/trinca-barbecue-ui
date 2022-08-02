export interface IBarbecue {
	id: number;
	date: Date;
	title: string;
	guests: IGuest[];
	pressionable: boolean;
}

export interface IGuest {
	id: number;
	name: string;
	amount: number;
	confirmed: boolean;
}
