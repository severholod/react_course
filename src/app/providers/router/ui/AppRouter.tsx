import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { Loader } from 'shared/ui/Loader';

const AppRouter = () => (
    <Routes>
        {
            routeConfig.map(({ element, path }) => (
                <Route
                    path={path}
                    key={path}
                    element={(
                        <Suspense fallback={<Loader page />}>
                            <div className="page">{element}</div>
                        </Suspense>
                    )}
                />
            ))
        }
    </Routes>
);

export default AppRouter;
