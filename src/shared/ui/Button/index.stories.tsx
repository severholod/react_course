import type { Meta, StoryObj } from '@storybook/react';

import { EButtonTheme } from 'shared/ui/Button/interfaces';
import { Button } from './index';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Text',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        theme: EButtonTheme.PRIMARY,
    },
};

export const Clear: Story = {
    args: {
        theme: EButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        theme: EButtonTheme.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        theme: EButtonTheme.BACKGROUD,
    },
};

export const BackgroundInvert: Story = {
    args: {
        theme: EButtonTheme.BACKGROUD_INVERT,
    },
};

export const Square: Story = {
    args: {
        theme: EButtonTheme.PRIMARY,
        square: true,
        size: '40',
    },
};
