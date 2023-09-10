import React from 'react';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components/layout'
import ProjectList from '../components/ProjectList';



const Main = styled.main`
  margin: 2.5vw;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  h1 {
    font-size: 24px;
  }
  p {
    color: #555;
    line-height: 1.5;
  }

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in 205ms;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }
  #additional-info {
    margin: 0 auto;
  }
  .markdown p:first-child {
    margin-top: 0;
  }
`;

const ProjectsIndex = ({ data, location }) => {


  return <Layout location={location}><div>
    <Helmet title="David Baker is Hacking" />
    <Main>
      <ProjectList projects={data.allProjectsJson.edges} />
    </Main>
    {/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
  </div>
  </Layout>
}

export default ProjectsIndex;


export const pageQuery = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          path
          year
          name
          status
          tagline
          description
          callToAction
          link
          linkToSource
          linkToTrello
          gridColumn
          gridRow
          agency {
            name
            link
          }
        }
      }
    }
  }`

