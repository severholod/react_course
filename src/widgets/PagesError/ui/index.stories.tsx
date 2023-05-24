import type { Meta, StoryObj } from '@storybook/react';

import { PagesError } from '.';

const meta: Meta<typeof PagesError> = {
    title: 'widget/PagesError',
    component: PagesError,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PagesError>;

export const Default: Story = {
    args: {},
};
