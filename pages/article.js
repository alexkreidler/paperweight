import React from 'react'
import Article from '../components/Article'
import dynamic from 'next/dynamic'

const DynamicData = dynamic(import('../data/articles/ionosphere.md'))


function ArticlePage({content, meta}) {
    return (
        <Article title="text" author="alex kreidler" body={content}></Article>
    )
}

ArticlePage.getInitialProps = function(reqOrContext) {
    // const { slug } = reqOrContext.query;
    // const p = `../data/articles/${slug}.md`;
    // console.log(p);
    // if (!process.browser) {
    //     console.log('this code will only run on the server')
    // const c = import();
    // }
    // let content = require(p);
    console.log('go');
    
    console.log(DynamicData);
    
    const content = DynamicData;

    // const meta = converter.getMetadata();
    return { content };
}

export default ArticlePage;