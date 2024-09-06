import PropTypes from 'prop-types';

export default function Carousel({ children }) {
  return (
    <>
      {children}
    </>
  );
}

Carousel.propTypes = {
  children: PropTypes.any,
};
