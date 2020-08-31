import React from 'react';
import { graphql } from 'gatsby';
import Markdown from '../markdown/markdown';

import './doc.less';

const Doc = ({data}) => {
    const md = data?.markdownRemark?.rawMarkdownBody || '';
    return (
        <div className="doc">
            <Markdown md={md} />
        </div>
    )
};

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
        }
    }
`;

export default Doc;