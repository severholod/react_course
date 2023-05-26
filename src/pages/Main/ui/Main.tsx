import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Главная')}
            <Counter />
        </div>
    );
};

export default Main;
