import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks() {
  return (
    <div className="w-full md:w-1/5 flex items-center justify-center md:justify-around space-x-5">
      <a href="https://www.linkedin.com/in/borislav-pachev" target="_blank">
        <FontAwesomeIcon size="xl" icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/borislavpachev" target="_blank">
        <FontAwesomeIcon size="xl" icon={faGithub} />
      </a>
      <a href="https://discord.com/users/930437017710501908" target="_blank">
        <FontAwesomeIcon size="xl" icon={faDiscord} />
      </a>
    </div>
  );
}
