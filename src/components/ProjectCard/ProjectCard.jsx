import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ data }) {
  return (
    <div className="rounded-3xl max-w-sm bg-blue-950 p-3">
      <p>{data.description}</p>
      <div className="flex items-center justify-center space-x-3">
        <Button className={`${!data.liveURL && 'hidden'}`}>Live</Button>
        <Button>
          <FontAwesomeIcon size="xl" icon={faGithub} />
        </Button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.any,
};
