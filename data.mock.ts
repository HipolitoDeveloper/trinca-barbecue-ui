import {IBarbecue} from "@interfaces/Barbecue";

export const barbecues = [
    {
        id: 1,
        title: 'Niver do Gui',
        date: new Date(2022, 5, 1),
        guests: [
            {id: 1, name: 'Convidado 1', amount: 20, confirmed: false},
            {id: 2, name: 'Convidado 2', amount: 24, confirmed: false},
            {id: 3, name: 'Convidado 3', amount: 14, confirmed: false},

        ],
        pressionable: true,
    },
    {
        id: 2,
        title: 'Final de Ano',
        date: new Date(2022, 12, 23),
        guests: [
            {id: 1, name: 'Convidado 1', amount: 10, confirmed: false},
            {id: 2, name: 'Convidado 2', amount: 10, confirmed: false},
            {id: 3, name: 'Convidado 3', amount: 20, confirmed: false},
            {id: 4, name: 'Convidado 4', amount: 20, confirmed: false},
        ],
        pressionable: true,
    },
    {
        id: 3,
        title: 'Sem motivo',
        date: new Date(2022, 6, 1),
        guests: [
            {id: 1, name: 'Convidado 1', amount: 50, confirmed: false},
            {id: 2, name: 'Convidado 2', amount: 50, confirmed: false},

        ],
        pressionable: true,
    },
]
