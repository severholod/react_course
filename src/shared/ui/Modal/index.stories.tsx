import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { Modal } from '.';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    decorators: [
        (Story) => {
            const [state, setState] = useState(false);
            const children = 'Lorem ipsum dolor sit amet,\n'
                    + '                consectetur adipisicing elit.\n'
                    + '                Aliquid aperiam consequatur in\n'
                    + '                laborum odit quas similique.\n'
                    + '                Amet aut est eum in, magnam minima\n'
                    + '                molestias neque nulla officia quos recusandae\n'
                    + '                voluptates voluptatibus. Amet debitis dolor, dolore\n'
                    + '                earum, enim facere fugiat illum in iste,\n'
                    + '                iure nesciunt nostrum numquam provident\n'
                    + '                suscipit voluptas voluptate?';
            return (
                <>
                    <button type="button" onClick={() => setState(true)}>toggle</button>
                    <Story args={{ isOpen: state, children, onClose: () => setState(false) }} />
                </>
            );
        },
    ],
};
