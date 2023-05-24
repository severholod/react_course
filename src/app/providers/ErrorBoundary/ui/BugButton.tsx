import React from 'react';
import { Button } from 'shared/ui/Button';
import { EButtonTheme } from 'shared/ui/Button/interfaces';

export const BugButton = () => {
    const throwError = () => {
        throw new Error();
    };

    return (
        <Button theme={EButtonTheme.PRIMARY} onClick={throwError}>
            THROW ERROR
        </Button>
    );
};

export default BugButton;
