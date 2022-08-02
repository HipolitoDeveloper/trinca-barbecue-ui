import { IBarbecue } from '@interfaces/Barbecue';
import { barbecues } from '@root/data.mock';

const getBarbecue = (barbecueId: any) => {
	const barbecue = barbecues.find((barbecue) => barbecue.id == barbecueId);

	if (barbecue) {
		return {
			...barbecue,
			guestsQTT: barbecue?.guests.length,
		};
	}
};

const getBarbecues = (): IBarbecue[] => {
	return barbecues;
};

const addBarbecue = (barbecue: IBarbecue) => {
	barbecue.date = new Date(barbecue.date);
	barbecue.id = Math.random();
	barbecue.pressionable = false;
	return barbecue;
};

export { addBarbecue, getBarbecue, getBarbecues };
