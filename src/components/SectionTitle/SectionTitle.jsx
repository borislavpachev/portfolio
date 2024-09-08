import PropTypes from 'prop-types';

export default function SectionTitle({ children }) {
  return <h1 className="text-5xl md:text-6xl mt-10 -tracking-wider">{children}</h1>;
}

SectionTitle.propTypes = {
  children: PropTypes.any,
};
