import PropTypes from 'prop-types';

export default function SectionTitle({ children }) {
  return <h1 className="text-center text-4xl md:text-6xl my-10 -tracking-wider">{children}</h1>;
}

SectionTitle.propTypes = {
  children: PropTypes.any,
};
