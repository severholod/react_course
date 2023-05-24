import type { Meta, StoryObj } from '@storybook/react';

import { ELinkTheme } from 'shared/ui/AppLink/interfaces';
import { AppLink } from '.';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '',
        children: 'LINK',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: ELinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        theme: ELinkTheme.SECONDARY,
    },
};
