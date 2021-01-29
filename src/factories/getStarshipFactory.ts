import faker from 'faker';
import { StarshipData } from '../pages/ts';

function getStarshipFactory(): StarshipData {
    return {
        name: faker.name.title(),
        url: faker.internet.url(),
        edited: new Date().toJSON(),
        created: new Date().toJSON(),
        model: faker.name.title(),
        manufacturer: faker.company.companyName(),
        cost_in_credits: faker.random.number(),
        length: faker.random.number(),
        max_atmosphering_speed: faker.random.number(),
        crew: faker.random.number().toString(),
        passengers: faker.random.number(),
        cargo_capacity: faker.random.number(),
        consumables: faker.random.word(),
        hyperdrive_rating: faker.random.number(5),
        MGLT: faker.random.number(),
        starship_class: faker.name.title(),
        pilots: [],
        films: [],
    };
}

export default getStarshipFactory;
