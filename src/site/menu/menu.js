import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import "./menu.less";

const MenuItem = ({name, handleClose}) => (
    <li>
        <Link to={`/${name}`} onClick={handleClose}>{name}</Link>
    </li>
);

const MenuCategory = ({items, name, handleClose}) => { 
    const [open, setOpen] = useState(true);
    
    return (
        <div className="menu-list section">
            <a className="category header5" onClick={() => setOpen(!open)}>
                <span>{name}</span>
                <mortar-icon kind={(open) ? "up2" : "down2"}></mortar-icon>
            </a>
            <ul className={`${(open) ? 'show' : ''}`}>
                {items.map((v, k) => (
                    <MenuItem key={`menu-item-${name}-${k}`} name={v.name} handleClose={handleClose} />
                ))}
            </ul>
        </div>
    )
}

const Menu = ({open, handleClose}) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark(sort: {order: ASC, fields: frontmatter___name}, filter: {frontmatter: {include: {eq: true}}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            type
                        }
                    }
                }
            }
        }
    `);

    const { edges } = data.allMarkdownRemark;
    const list = edges.reduce((arr, v) => {
        const type = v.node.frontmatter.type.toLowerCase();
        const name = v.node.frontmatter.name.toLowerCase();

        if (!arr[type]) {
            arr[type] = [{type, name}];
        } else {
            arr[type].push({type, name});
        }
        
        return arr;
    }, {});
    
    return (
        <nav className={(open) ? 'show': ''}>
            <div className="section">
                <ul className="show">
                    <li><Link to="/" onClick={handleClose}>Introduction</Link></li>
                </ul>
            </div>
            {Object.keys(list).map((v) => (
                <MenuCategory key={`menu-${v}`} name={v} items={list[v]} handleClose={handleClose} />
            ))}
            <div className="section">
                <ul className="show">
                    <li><Link to="/changelog" onClick={handleClose}>Changelog</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;