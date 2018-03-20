import React from "react";
import Helmet from "react-helmet";
import RehypeReact from 'rehype-react';
import YouTubeVideo from '../components/YouTubeVideo';

const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
        'youtube-video': YouTubeVideo,
    }
}).Compiler;

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data
}) {
  const {
    markdownRemark: post
  } = data;
    return(
      <div className = "blog-post-container" >
        <Helmet title = {
          `Inquiry | ${post.frontmatter.title}`
        } />
        <div className = "blog-post" >
        <h1> { post.frontmatter.title } </h1>
        <div className="blog-post-content">
            { renderAst(post.htmlAst) }
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
