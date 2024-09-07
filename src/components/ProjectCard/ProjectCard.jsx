import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AnimatedCard from '../AnimatedCard/AnimatedCard';

export default function ProjectCard({ project }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-3xl hover:shadow-2xl
     shadow-blue-950 p-2 m-2 bg-white text-xl"
    >
      <img
        title={`${project.name}`}
        className={`w-[250px] h-[250px] bg-blue-950 object-contain p-2 ${project.backgroundColor} rounded-3xl shadow-lg shadow-blue-950`}
        src={project.backgroundImage}
        alt={project.name}
      />
      <p className="text-blue-950 mt-2">{project.name}</p>
      <div
        className="flex flex-col w-full h-full absolute rounded-3xl bottom-0 left-0 right-0 
        transition duration-500 ease-in-out space-y-5 items-center justify-center
        bg-blue-300 opacity-0 group-hover:opacity-100
        border-b-rounded-3xl shadow-2xl"
      >
        <p className="text-semibold text-center text-blue-950 text-balance">
          {project.description}
        </p>
        <div className="flex flex-col items-center justify-center space-y-5">
          <AnimatedCard>
            <a href={project.liveURL} target="_blank">
              <Button className={`${!project.liveURL && 'hidden'}`}>
                Live
              </Button>
            </a>
          </AnimatedCard>
          <a href={project.github} target="_blank">
            <Button>
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.any,
};
