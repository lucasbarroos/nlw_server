import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lampadas', image: 'empty.jpg' },
        { title: 'Pilhas e Baterias', image: 'empty.jpg' },
        { title: 'Papeis e Papelao', image: 'empty.jpg' },
        { title: 'Residuos Eletronicos', image: 'empty.jpg' },
        { title: 'Residuos Organicos', image: 'empty.jpg' },
        { title: 'Oleo de Cozinha', image: 'empty.jpg' },
    ]);
};