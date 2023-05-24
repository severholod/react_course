import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from '.';

const meta: Meta<typeof LangSwitcher> = {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Default: Story = {
    args: {},
};
