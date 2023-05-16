import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Главная')}
        </div>
    );
};

export default Main;