import PropTypes from 'prop-types';

export default function SectionTitle({ children }) {
  return <h1 className="text-6xl mb-5 -tracking-wider">{children}</h1>;
}

SectionTitle.propTypes = {
  children: PropTypes.any,
};
