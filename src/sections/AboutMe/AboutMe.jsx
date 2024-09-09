import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';

export default function AboutMe({ aboutRef }) {
  return (
    <Section scrollRef={aboutRef} className="text-xl md:text-2xl">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-5xl flex items-center shadow-2xl bg-white/10 rounded-3xl">
        <div className="hidden h-[500px] w-1/3 md:flex">
          <img
            className="h-full object-cover rounded-3xl rounded-r-none"
            src="/about-me-coding.jpg"
            alt="photo"
          />
        </div>

        <div className="w-full md:w-2/3 p-10 md:p-14 relative text-pretty">
          <div className="absolute top-0 left-7 text-4xl md:text-5xl opacity-50">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <p>{`I'm a web developer based in Sofia, always eager for new challenges.
          Programming has become my passion, turning each project into an
          adventure filled with discovery, personal growth, and the satisfaction
          of creating something new. I love the good company of friends and
          enjoy exploring nature with my camera fully charged or setting out for
          a winter hike.`}</p>
          <div className="absolute bottom-0 right-10 text-4xl md:text-5xl opacity-50">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>
      </div>
    </Section>
  );
}

AboutMe.propTypes = {
  aboutRef: PropTypes.any,
};
