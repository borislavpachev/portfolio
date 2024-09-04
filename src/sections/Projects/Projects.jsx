import { ProjectCard, Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';
import { projectsData } from '../../utils/constants';

export default function Projects({ projectsRef }) {
  return (
    <Section scrollRef={projectsRef}>
      <SectionTitle>Projects</SectionTitle>
      <div
        className="max-w-5xl shadow-2xl bg-white/10 rounded-3xl p-2
       grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
          place-items-center "
      >
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
        })}
      </div>
    </Section>
  );
}

Projects.propTypes = {
  projectsRef: PropTypes.any,
};
