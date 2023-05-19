import React from 'react';
import { Button, EThemeButton } from 'shared/ui/Button';

export const BugButton = () => {
    const throwError = () => {
        throw new Error();
    };

    return (
        <Button theme={EThemeButton.PRIMARY} onClick={throwError}>
            THROW ERROR
        </Button>
    );
};

export default BugButton;
