import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import _ActionButtons, { ActionButtonsProps } from './ActionButtons';

export default {
    title: 'MOLECULES/ActionButtons',
    component: _ActionButtons,
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
    argTypes: {},
} as Meta;

export const ActionButtons: Story<ActionButtonsProps> = ({ cards, competition, setCards }) => (
    <_ActionButtons cards={cards} competition={competition} setCards={setCards} />
);
