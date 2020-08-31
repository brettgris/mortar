import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header/header';

import "./site.less";

const App = ({children}) => {
    return (
        <div className="mortar-wrapper site-wrapper">
            <Helmet>
                <title>Mortar Web Components</title>
                <link rel="stylesheet" href="https://olivine-longing-pigeon.glitch.me/style.min.css"></link>
                <script defer src="/mortar/bundle.js"></script>
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