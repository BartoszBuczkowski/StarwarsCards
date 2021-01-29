type Gender = 'male' | 'female' | 'n/a';

export interface Data {
    name: string;
    url: string;
    edited: string;
    created: string;
}

export interface HeroData extends Data {
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: Gender;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
}

export interface StarshipData extends Data {
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: number;
    MGLT: number;
    starship_class: string;
    pilots: string[];
    films: string[];
}

export type Competitions = 'people' | 'starships';
export type Cards = HeroData | StarshipData;
