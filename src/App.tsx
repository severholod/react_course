import React, {FC, Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {useTheme} from "./hooks/useTheme";
import {classNames} from "./utils/classNames";


const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <br/>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutAsync />} />
                    <Route path="/" element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;