import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatedCard, Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ contactRef }) {
  return (
    <Section scrollRef={contactRef} className="text-xl md:text-2xl">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="max-w-5xl flex flex-col md:flex-row m-auto pb-8 md:py-12 md:px-16 items-center bg-white/10 rounded-3xl shadow-2xl">
        <div>
          <p className="max-w-md p-10">
            {
              "It would be a pleasure to build something great together - reach out, and let's connect!"
            }{' '}
          </p>
        </div>

        <a href="mailto:borislav.pachev@gmail.com" target="_blank">
          <AnimatedCard
            className={
              'flex flex-col bg-blue-950 text-sm md:text-xl rounded-3xl p-6 md:p-10 shadow-2xl shadow-blue-950/90 border-white border-2 items-center'
            }
          >
            <FontAwesomeIcon icon={faEnvelope} className="p-4 text-4xl" />
            borislav.pachev@gmail.com
          </AnimatedCard>
        </a>
      </div>
    </Section>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.any,
};
