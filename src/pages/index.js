import React from 'react';
import { graphql } from 'gatsby';

import Markdown from '../site/markdown/markdown';

import '../site/doc/doc.less';

const Index = ({data}) => {
    const md = data?.markdownRemark?.rawMarkdownBody || '';

    return (
        <div className="doc">
            <Markdown md={md} />
        </div>
    );
}

export const pageQuery = graphql`
    query {
        markdownRemark(frontmatter: {include: {}, index: {eq: true}}) {
            rawMarkdownBody
        }
    }
`; 

export default Index;