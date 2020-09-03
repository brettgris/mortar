import React from 'react';
import icons from '../../components/mortar-illustration/icons';

import './illustrations.less';

const Illustrations = () => {
    
    return (
        <div className="illustration-wrapper">
            {
                icons.map((v, k) => {
                    const name = v.name.toLowerCase();
                    const isWhite = name.indexOf('white') > -1;
                    return (
                        <div className={`illustration-item ${(isWhite) ? 'reverse' : ''}`} key={`illustration-${k}`}>
                            <div className="illustration-icon">
                                <mortar-illustration kind={v.name}></mortar-illustration>
                            </div>
                            <div className="illustration-name">
                                <span>{v.name}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Illustrations;