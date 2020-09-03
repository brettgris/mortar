import React from 'react';
import MarkdownJSX from 'markdown-to-jsx';

import Code from '../code/code';
import Icons from '../icons/icons';
import Illustrations from '../illustrations/illustrations';

const Markdown = ({md}) => {
    return (
        <MarkdownJSX
            options={{
                overrides: {
                    h1: ({children}) => (
                        <p className="header1">{children}</p>
                    ),
                    h2: ({children}) => (
                        <p className="header2">{children}</p>
                    ),
                    h3: ({children}) => (
                        <p className="header3">{children}</p>
                    ),
                    h4: ({children}) => (
                        <p className="header4">{children}</p>
                    ),
                    h5: ({children}) => (
                        <p className="header5">{children}</p>
                    ),
                    h6: ({children}) => (
                        <p className="header6">{children}</p>
                    ),
                    a: ({href, children}) => (
                        <a href={href} target="_blank" rel="noreferrer">{children}</a>
                    ),
                    pre: Code,
                    Icons: Icons,
                    Illustrations: Illustrations
                }
            }}
        >
            {md}
        </MarkdownJSX>
    )
}

export default Markdown;