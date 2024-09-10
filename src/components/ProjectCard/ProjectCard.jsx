import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AnimatedCard from '../AnimatedCard/AnimatedCard';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { techStackData } from '../../utils/constants';

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const projectTechnologiesUsed = techStackData.reduce((acc, technology) => {
    project.technologies.map((tech) => {
      if (tech === technology.name) {
        acc.push(technology);
      }
    });
    return acc;
  }, []);

  return (
    <>
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
        transition duration-500 ease-in-out space-y-10 items-center justify-center
        bg-blue-300 opacity-0 group-hover:opacity-100
        border-b-rounded-3xl shadow-2xl"
        >
          <p className="text-semibold text-center text-blue-950 p-3 text-balance">
            {project.description}
          </p>
          <Button onClick={() => setOpen(true)}>Info</Button>
        </div>
      </div>

      <Modal open={open} close={() => setOpen(false)}>
        <div className="flex flex-col p-4 md:p-10 mt-5 m-auto space-y-8 items-center">
          <h1 className="text-4xl">{project.name}</h1>
          <img
            title={`${project.name}`}
            className={`w-[200px] h-[200px] bg-blue-950 object-contain ${project.backgroundColor} rounded-3xl shadow-lg shadow-blue-950`}
            src={project.backgroundImage}
            alt={project.name}
          />

          <p className="italic font-semibold">{project.summary}</p>
          <div>
            <p className="font-bold mb-2">Contributions:</p>
            <ul className="ml-0 md:ml-8">
              {project.features.map((item, index) => {
                return (
                  <li className="list-disc ml-6" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex space-x-2">
            {projectTechnologiesUsed.map((technology) => {
              return (
                <div
                  key={technology.id}
                  className="bg-white my-2 md:my-8 rounded-3xl"
                >
                  <img
                    title={`${technology.name}`}
                    style={{
                      filter: `${technology.color}`,
                    }}
                    className="w-[80px] p-2 shadow-2xl shadow-blue-950 rounded-3xl"
                    src={technology.logo}
                    alt={technology.name}
                  />
                </div>
              );
            })}
          </div>

          <div
            className={`flex flex-col md:flex-row w-1/2 space-y-5 md:${
              project.liveURL ? 'space-x-10 w-full' : 'w-1/2'
            } md:space-y-0 items-center justify-center`}
          >
            <AnimatedCard className={`${!project.liveURL && 'hidden'} w-full`}>
              <a href={project.liveURL} target="_blank" className="w-full">
                <Button className="w-full">Live</Button>
              </a>
            </AnimatedCard>
            <a href={project.github} target="_blank" className="w-full">
              <Button className="w-full">
                <FontAwesomeIcon size="xl" icon={faGithub} />
              </Button>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.any,
};
