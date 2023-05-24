import { FC, Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => (
    <div className={classNames('app')}>
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <div className="wrap">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
