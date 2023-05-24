import type { Meta, StoryObj } from '@storybook/react';

import { Button, EThemeButton } from '.';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: EThemeButton.PRIMARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: EThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: EThemeButton.OUTLINE,
    },
};
