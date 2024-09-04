import PropTypes from 'prop-types';

export default function CarouselButton({ id }) {
  return (
    <a
      href={`#carousel-item${id + 1}`}
      className="mt-1 rounded-3xl font-bold px-3 py-1 bg-blue-950"
    >
      {id + 1}
    </a>
  );
}

CarouselButton.propTypes = {
  id: PropTypes.any,
};
