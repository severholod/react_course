import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Главная')}
        </div>
    );
};

export default Main;
