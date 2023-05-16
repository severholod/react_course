import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/'
}

export const routeConfig: RouteProps[] = [
    {path: RoutePath.main, element: <MainPage />},
    {path: RoutePath.about, element: <AboutPage />}
]