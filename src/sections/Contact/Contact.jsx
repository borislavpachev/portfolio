import { useState } from 'react';
import { Button, Section, SectionTitle } from '../../components';
import PropTypes from 'prop-types';

export default function Contact({ contactRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Section scrollRef={contactRef}>
      <SectionTitle>Contact Me</SectionTitle>
      <div className="min-w-5xl p-10 items-center bg-white/10 rounded-3xl shadow-2xl">
        <Button onClick={handleClick} className={`${isOpen && 'hidden'}`}>
          Say Hello
        </Button>

        {isOpen && (
          <form className="w-full">
            <div className="flex items-center border-b border-blue-950 py-2">
              <input
                className="appearance-none bg-transparent text-white text-xl border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Your email"
                aria-label="Full name"
              />
              <Button type="submit" onClick={() => {}}>
                Send
              </Button>
              <Button onClick={handleClick}>Cancel</Button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.any,
};
