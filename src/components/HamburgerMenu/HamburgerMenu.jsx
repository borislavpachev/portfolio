import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function HamburgerMenu({ handleOpen, isOpen, children }) {
  return (
    <>
      <div className="md:hidden" onClick={handleOpen}>
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } z-500 hamburger md:hidden focus:outline-none`}
        >
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center w-full">
          <button
            className="mb-3 -mt-9 hover:text-red-600"
            onClick={handleOpen}
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
          {children}
        </div>
      )}
    </>
  );
}

HamburgerMenu.propTypes = {
  handleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};
