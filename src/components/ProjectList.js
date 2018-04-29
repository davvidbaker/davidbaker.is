import React from 'react';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 2.5vw;
`;
const compareYears = ({ node: a }, { node: b }) => {
  if (Math.max(...a.year) > Math.max(...b.year)) {
    return -1;
  } else if (Math.max(...a.year) < Math.max(...b.year)) {
    return 1;
  } else if (Math.min(...a.year) < Math.min(...b.year)) {
    return 1;
  } else if (Math.min(...a.year) > Math.min(...b.year)) {
    return -1;
  } else if (
    Math.min(...a.year) === Math.min(...b.year) &&
    Math.max(...a.year) === Math.max(...b.year)
  ) {
    if (a.name.length > b.name.length) {
      // arbitrary but deterministic (I doubt names will often be same length)
      return 1;
    }
  }

  return 0;
};

const ProjectList = ({ projects }) => (
  // <ul className={showingAdditionalInfo ? 'hidden' : 'visible'}>
  <UL>
    {projects.sort(compareYears).map(project => {
      return (
        <ProjectItem
          key={project.node.name}
          year={project.node.year}
          status={project.node.status}
          tagline={project.node.tagline}
          name={project.node.name}
          description={project.node.description}
          callToAction={project.node.callToAction}
          link={project.node.link}
          linkToSource={project.node.linkToSource}
          linkToTrello={project.node.linkToTrello}
          highlight={project.node.highlight}
          agency={project.node.agency}
          path={project.node.path}
        />
      );
    })}
  </UL>
);

export default ProjectList;
