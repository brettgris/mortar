import React, {useState} from 'react';
import { Link } from 'gatsby';

import Menu from '../menu/menu';

import './header.less';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div class="header-wrapper">
            <header>
                <div className="header-wrapper">
                    <div className="menu-btn">
                        <button onClick={() => setOpen(!open)}>
                            <mortar-icon kind={(open) ? 'close' : 'hamburger'}></mortar-icon>
                        </button>
                    </div>
                    
                    <div className="logo">
                        <Link to="/">
                            <mortar-illustration kind="apartmentsBlack"></mortar-illustration>
                        </Link>
                    </div>
                    
                </div>    
            </header>
            <Menu open={open} handleClose={() => setOpen(false)} />
        </div>
    )
};

export default Header;