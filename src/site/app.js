import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from './header/header';

import "./site.less";

const App = ({children}) => {
    useEffect(() => {
        const script = document.createElement("script");
        
        script.src = "/mortar/mortar.js";
        script.async = true;
        
        document.body.appendChild(script);
    }, []);

    return (
        <div className="mortar-wrapper site-wrapper">
            <Helmet>
                <title>Mortar Web Components</title>
                <link rel="stylesheet" href="/style.min.css"></link>
            </Helmet>
            <Header />
            <main className="main">
                <div className="content">
                    {children}
                </div>
            </main>
        </div>
    )
};

export default App;