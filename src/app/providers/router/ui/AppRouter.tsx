import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routeConfig.map(({element, path}) => (<Route  path={path} key={path} element={<div className="page">{element}</div>} />))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;