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
    handleClick();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-auto top-0 sticky backdrop-blur z-40">
      <nav className="flex items-center justify-center text-center text-xl space-x-0 md:space-x-10">
        <Logo logoRef={logoRef} scrollIntoView={scrollIntoView} />
        <ul
          className="hidden w-3/5 p-7 shadow-xl  bg-slate-500/40 rounded-b-full 
          justify-evenly md:flex md:space-x-7 items-center
          hover:bg-blue-500/70 
          "
        >
          <li
            onClick={() => scrollIntoView(aboutRef, 45)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 cursor-pointer hover:underline"
          >
            About
          </li>
          <li
            onClick={() => scrollIntoView(techStackRef, 45)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 cursor-pointer hover:underline"
          >
            Tech Stack
          </li>
          <li
            onClick={() => scrollIntoView(projectsRef, 45)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 cursor-pointer hover:underline"
          >
            Projects
          </li>
          <li
            onClick={() => scrollIntoView(contactRef, 45)}
            className="hover:scale-110 transition ease-in-out duration-250 underline-offset-8 cursor-pointer hover:underline"
          >
            Contact
          </li>
        </ul>

        <HamburgerMenu handleOpen={handleClick} isOpen={isOpen}>
          <ul className="flex flex-col w-full space-y-2 text-md items-center">
            <li
              onClick={() => scrollIntoView(aboutRef, 170)}
              className="underline-offset-8 cursor-pointer hover:underline"
            >
              About
            </li>
            <li
              onClick={() => scrollIntoView(techStackRef, 170)}
              className="underline-offset-8 cursor-pointer hover:underline"
            >
              Tech Stack
            </li>
            <li
              onClick={() => scrollIntoView(projectsRef, 170)}
              className="underline-offset-8 cursor-pointer hover:underline"
            >
              Projects
            </li>
            <li
              onClick={() => scrollIntoView(contactRef, 170)}
              className="underline-offset-8 cursor-pointer hover:underline"
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
