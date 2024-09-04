import { useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import PropTypes from 'prop-types';

export default function Header({ refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutRef, projectsRef, contactRef, techStackRef] = refs;
  const logoRef = useRef(null);

  const scrollIntoView = (element, offset = 0) => {
    if (element && element.current) {
      const elementPosition =
        element.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-auto px-10 top-0 text-center md:text-left sticky backdrop-blur z-40">
      <nav
        className="flex flex-col items-center justify-center text-xl space-y-8 
      md:flex-row md:space-y-0 md:space-x-5 p-3 md:p-0"
      >
        <Logo logoRef={logoRef} scrollIntoView={scrollIntoView} />
        <ul
          className="hidden w-3/5 p-7 shadow-xl  bg-slate-500/40 rounded-b-full 
          justify-evenly md:flex md:space-x-8 items-center
          hover:bg-blue-500/70
          "
        >
          <li
            onClick={() => scrollIntoView(aboutRef, 85)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 hover:underline"
          >
            About
          </li>
          <li
            onClick={() => scrollIntoView(techStackRef, 85)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 hover:underline"
          >
            Tech Stack
          </li>
          <li
            onClick={() => scrollIntoView(projectsRef, 85)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 hover:underline"
          >
            Projects
          </li>
          <li
            onClick={() => scrollIntoView(contactRef, 85)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 hover:underline"
          >
            Contact
          </li>
        </ul>

        <HamburgerMenu handleOpen={handleClick} isOpen={isOpen}>
          <ul className="flex flex-col w-full space-y-3 text-md items-center">
            <li
              onClick={() => scrollIntoView(aboutRef, 330)}
              className="underline-offset-8 hover:underline"
            >
              About
            </li>
            <li
              onClick={() => scrollIntoView(techStackRef, 330)}
              className="underline-offset-8 hover:underline"
            >
              Tech Stack
            </li>
            <li
              onClick={() => scrollIntoView(projectsRef, 330)}
              className="underline-offset-8 hover:underline"
            >
              Projects
            </li>
            <li
              onClick={() => scrollIntoView(contactRef, 330)}
              className="underline-offset-8 hover:underline"
            >
              Contact
            </li>
          </ul>
        </HamburgerMenu>
        <SocialLinks />
      </nav>
    </header>
  );
}

Header.propTypes = {
  refs: PropTypes.array,
};
