import React from 'react';
import icons from '../../components/mortar-icon/icons';

import './icons.less';

const Icons = () => {
    console.log(icons);
    return (
        <div className="icon-wrapper">
            {
                icons.map((v, k) => {
                    return (
                        <div className="icon-item" key={`icon-${k}`}>
                            <div className="icon-icon">
                                <mortar-icon kind={v.name}></mortar-icon>
                            </div>
                            <div className="icon-name">
                                <span>{v.name}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Icons;