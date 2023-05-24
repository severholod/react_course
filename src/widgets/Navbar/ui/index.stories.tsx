import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '.';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {},
};
