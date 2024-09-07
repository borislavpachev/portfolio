import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatedCard, Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ contactRef }) {
  return (
    <Section scrollRef={contactRef}>
      <SectionTitle>Contact Me</SectionTitle>
      <div className="min-w-5xl flex flex-col md:flex-row m-auto p-10 md:p-0 md:py-12 md:px-16 text-2xl items-center bg-white/10 rounded-3xl shadow-2xl">
        <div>
          <p className="max-w-lg p-12">
            {
              "It would be a pleasure to build something great together - reach out, and let's connect!"
            }{' '}
          </p>
        </div>

        <a href="mailto:borislav.pachev@gmail.com" target="_blank">
          <AnimatedCard
            className={
              'bg-blue-950 text-xl rounded-3xl p-10 shadow-2xl shadow-blue-950/90 border-white border-2 flex flex-col items-center'
            }
          >
            <FontAwesomeIcon icon={faEnvelope} className="p-3 text-4xl" />
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
