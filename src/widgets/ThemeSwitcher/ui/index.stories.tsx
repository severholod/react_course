import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from '.';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
    args: {},
};
