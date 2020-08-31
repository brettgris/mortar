import React from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live';
import Mermaid from 'react-mermaid2';
import theme from 'prism-react-renderer/themes/vsDark';
import Highlight, { defaultProps } from "prism-react-renderer";

import './code.less';

const Code = ({children}) => {
    if (children.props.className === 'lang-example') {
        return (
            <div className="example">
                <LiveProvider code={children.props.children} theme={theme}>
                    <div className="preview">
                        <LivePreview />
                    </div>
                    <div className="editor">
                        <LiveEditor />
                    </div>
                    <div className="error">
                        <LiveError />
                    </div>
                </LiveProvider>
            </div>
            
        )
    } else if (children.props.className === 'lang-mermaid') {
        return (
            <Mermaid chart={children.props.children}/>
        )
    }

    const lang = children.props.className.slice(5);
    return (
        <Highlight {...defaultProps} theme={theme} code={children.props.children} language={lang}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
                ))}
            </pre>
            )}
        </Highlight>
    );
}

export default Code;