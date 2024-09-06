import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { SectionTitle } from '../../components';
import PropTypes from 'prop-types';

export default function AboutMe({ aboutRef }) {
  return (
    <section ref={aboutRef} className="flex flex-col items-center">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-5xl flex items-center shadow-2xl text-2xl bg-white/10 rounded-3xl">
        <div className="hidden h-[500px] w-1/3 md:flex">
          <img
            className="h-full object-cover rounded-3xl rounded-r-none"
            src="/about-me-coding-2.jpg"
            alt="photo"
          />
        </div>
        <div className="p-14 md:w-2/3 relative text-pretty">
          <div className="absolute top-0 left-7 text-4xl md:text-5xl opacity-50">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          {`I'm a web developer based in Sofia, always eager for new challenges.
          Programming has become my passion, turning each project into an
          adventure filled with discovery, personal growth, and the satisfaction
          of creating something new. I love the good company of friends and
          enjoy exploring nature with my camera fully charged or setting out for
          a winter hike.`}
          <div className="absolute bottom-0 right-10 text-4xl md:text-5xl opacity-50">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  aboutRef: PropTypes.any,
};
