/** ⚠️ 🔮 maybe probably eventually don't have all projects exist in js file, but each has own json/yaml/whoa/js whatever file*/

import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import PROJECTS from '../constants/projects';
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

class ProjectsIndex extends React.Component {
  render() {
    const projects = get(
      this,
      'props.data.allProjectsJson.edges'
    ).map(project => ({
      node: {
        ...project.node,
        year: project.node.year.map(year => Number(year)),
      },
    }));
    return (
      <div>
        <Helmet title="David Baker is Hacking" />
        <Main>
          <ProjectList projects={projects} />
        </Main>
        {/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
      </div>
    );
  }
}

ProjectsIndex.propTypes = {
  route: PropTypes.object,
};

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
          agency {
            name
            link
          }
        }
      }
    }
  }
`;
