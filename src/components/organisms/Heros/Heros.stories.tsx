import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import _Heros, { HerosProps } from './Heros';
import getHeroFactory from '../../../factories/getHeroFactory';
import { HeroData } from '../../../pages/ts';

export default {
    title: 'ORGANISMS/Heros',
    component: _Heros,
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        winner: {
            defaultValue: null,
            control: {
                type: 'select',
                options: [0, 1, null],
            },
        },
    },
} as Meta;

const hero = getHeroFactory();

const cards: HeroData[] = [hero, hero];

export const Heros: Story<HerosProps> = ({ winner }) => <_Heros cards={cards} winner={winner} />;
