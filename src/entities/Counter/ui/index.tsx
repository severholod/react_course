import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice';
import { getCounterValue } from 'entities/Counter';
import { EButtonTheme } from 'shared/ui/Button/interfaces';
import { useTranslation } from 'react-i18next';

interface ICounterProps {
    className?: string
}
export const Counter: FC<ICounterProps> = ({ className }) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const incrementFunc = () => {
        dispatch(counterActions.increment());
    };
    const decrementFunc = () => {
        dispatch(counterActions.decrement());
    };
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])} data-testid="counter">
            <h1>
                {counterValue}
            </h1>
            <Button
                data-testid="increment"
                theme={EButtonTheme.OUTLINE}
                onClick={incrementFunc}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement"
                theme={EButtonTheme.OUTLINE}
                onClick={decrementFunc}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
