import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    args: {},
};
