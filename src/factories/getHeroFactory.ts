import faker from 'faker';
import { HeroData } from '../pages/ts';

function getHeroFactory(): HeroData {
    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        url: faker.internet.url(),
        edited: new Date().toJSON(),
        created: new Date().toJSON(),
        height: faker.random.number(),
        mass: faker.random.number(),
        hair_color: faker.internet.color(),
        skin_color: faker.internet.color(),
        eye_color: faker.internet.color(),
        birth_year: new Date().toJSON(),
        gender: faker.random.arrayElement(['male', 'female']),
        homeworld: faker.random.word(),
        films: [],
        species: [],
        vehicles: [],
        starships: [],
    };
}
export default getHeroFactory;
