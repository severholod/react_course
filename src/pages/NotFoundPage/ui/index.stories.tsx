import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from '.';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
    args: {},
};
