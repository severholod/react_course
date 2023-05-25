import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader';

const App: FC = () => (
    <div className={classNames('app')} id="app">
        <Suspense fallback={<Loader />}>
            <Navbar />

            <div className="wrap">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
