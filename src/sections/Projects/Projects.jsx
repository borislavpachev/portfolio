import { ProjectCard, Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';
import { projectsData } from '../../utils/constants';

export default function Projects({ projectsRef }) {
  return (
    <Section scrollRef={projectsRef} className={'max-w-5xl'}>
      <SectionTitle>Projects</SectionTitle>

      <div
        className="w-full shadow-2xl bg-white/10 rounded-3xl
        grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        place-items-center overflow-auto p-2"
      >
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </Section>
  );
}

Projects.propTypes = {
  projectsRef: PropTypes.any,
};
