import PropTypes from 'prop-types';

export default function CarouselButton({ id }) {
  const scrollCarousel = () => {
    const item = document.getElementById(`carousel-element`);

    let carouselWidth = item.clientWidth;
    let targetXPixel = carouselWidth * id;

    item.scrollTo(targetXPixel, 0);
  };
  return (
    <button
      onClick={scrollCarousel}
      className="mt-1 rounded-3xl font-bold px-3 py-1 bg-blue-950"
    >
      {id + 1}
    </button>
  );
}

CarouselButton.propTypes = {
  id: PropTypes.any,
};
