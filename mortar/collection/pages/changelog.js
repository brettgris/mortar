import React from 'react';
import { graphql } from 'gatsby';

import Markdown from '../site/markdown/markdown';

import '../site/doc/doc.less';

const Changelog = ({data}) => {
    const md = data?.markdownRemark?.rawMarkdownBody || '';

    return (
        <div className="doc">
            <Markdown md={md} />
        </div>
    );
}

export const pageQuery = graphql`
    query {
        markdownRemark(fileAbsolutePath: {regex: "/CHANGELOG/"}) {
            rawMarkdownBody
        }
  }
`; 

export default Changelog;