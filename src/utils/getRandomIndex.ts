import { Competitions } from '../pages/ts';

export function getRandomIndex(competition: Competitions): number {
    const max = competition === 'people' ? 83 : 13;
    return Math.floor(Math.random() * (max + 1)) + 1;
}
